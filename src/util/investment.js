// 이 함수는 인자로 자바스크립트 객체를 받습니다.
// 이 객체는 다음과 같은 속성들을 포함해야 합니다.
// - initialInvestment: 초기 투자 금액
// - annualInvestment: 매년 투자하는 금액
// - expectedReturn: 예상 연간 수익률
// - duration: 투자 기간(시간 단위)
export function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
}) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        annualData.push({
            year: i + 1, // year identifier
            interest: interestEarnedInYear, // the amount of interest earned in this year
            valueEndOfYear: investmentValue, // investment value at end of year
            annualInvestment: annualInvestment, // investment added in this year
        });
    }

    return annualData;
}

// 브라우저에서 제공하는 Intl API를 사용해 포맷터 객체를 생성합니다.
// 이 객체는 숫자를 통화 형식으로 변환할 수 있는 "format()" 메서드를 제공합니다.
// 사용 예시: formatter.format(1000) => "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});
