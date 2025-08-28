// run: `node evaluations/test.clipboard.logic.ts`
class TextInput {
    text: string;
    history: string[];
    historyIndex: number = 0;

    textLimit = 50; // Not implemented, just an idea
    historyLimit = 50; // Not implemented, just an idea

    constructor() {
        this.history = [];
    }

    edit(text) {
        if (text.length > this.textLimit) {
            throw new Error("Text limit reached");
        }

        this.historyIndex++;

        this.text = text;

        this.history.push(text);
    }

    // Note that steps is unimplemented, just an idea
    undo(steps?) {
        this.operation(-1);
    }

    // Note that steps is unimplemented, just an idea
    redo(steps?) {
        this.operation(1);
    }

    operation(direction: 1 | -1) {
        let newIndex = this.historyIndex + direction;

        if (newIndex < 1) {
            newIndex = 1;
        }

        if (newIndex > this.history.length - 1) {
            newIndex = this.history.length;
        }

        this.historyIndex = newIndex;
        this.text = this.history[this.historyIndex - 1];
    }

    getCurrentState() {
        return this.text;
    }
}

const editor = new TextInput();

editor.edit('First version');
editor.edit('Second version');
editor.edit('Third version');

console.log(`Third version: ${editor.getCurrentState()}`);
editor.undo();
console.log(`Second version: ${editor.getCurrentState()}`);
editor.undo();
console.log(`First version: ${editor.getCurrentState()}`);
editor.redo();
editor.redo();
console.log(`Third version: ${editor.getCurrentState()}`);