import illustrationEmpty from '../Assets/images/illustration-empty.svg';

export default function EmptyResults() {
    return (
        <article className="results empty">
            <img src={illustrationEmpty} alt="illustration empty results"/>
            <h1>Results shown here</h1>
            <p>
                Complete the form and click “calculate repayments” to see what your
                monthly repayments would be.
            </p>
        </article>
    );
}
