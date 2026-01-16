import { useState } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/Result";
import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
    const [form, setForm] = useState({
        initialInvestment: "",
        annualInvestment: "",
        expectedReturn: "",
        duration: "",
    });

    function handleInputChange(e) {
        const { id, value } = e.target;
        setForm((prev) => {
            return {
                ...prev,
                [id]: Number(value),
            };
        });
    }

    function inputIsValid(form) {
        return !(
            form.initialInvestment < 0 ||
            form.annualInvestment < 0 ||
            form.expectedReturn < 0 ||
            form.duration < 1
        );
    }

    return (
        <>
            <Header />
            <Input form={form} onInputChange={handleInputChange} />
            {inputIsValid(form) ? (
                <Result resultMap={calculateInvestmentResults(form)} />
            ) : (
                <p className="center">Please enter the appropriate value</p>
            )}
        </>
    );
}

export default App;
