export default function Input({ form, onInputChange }) {
    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">initialInvestment</label>
                    <input
                        id="initialInvestment"
                        type="number"
                        value={form.initialInvestment}
                        onChange={onInputChange}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="annualInvestment">annualInvestment</label>
                    <input
                        id="annualInvestment"
                        type="number"
                        value={form.annualInvestment}
                        onChange={onInputChange}
                        required
                    />
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn">expectedReturn</label>
                    <input
                        id="expectedReturn"
                        type="number"
                        value={form.expectedReturn}
                        onChange={onInputChange}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="duration">duration</label>
                    <input
                        id="duration"
                        type="number"
                        value={form.duration}
                        onChange={onInputChange}
                        required
                    />
                </p>
            </div>
        </div>
    );
}
