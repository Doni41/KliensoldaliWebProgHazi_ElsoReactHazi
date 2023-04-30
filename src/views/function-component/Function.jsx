import simpleExample from '../../stories/example-data/the-simple-example'

function Function() {
    const functionSyntax = simpleExample.fn.toString();
    const input = simpleExample.input;
    const output = simpleExample.output;
    const tests = simpleExample.tests;

    return (
        <div className="ui container">
            <h1>Function</h1>
            <p>{functionSyntax}</p>
            <h1>Tests</h1>
            
        </div>
    )
}

export default Function