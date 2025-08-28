class TextInput {
    text: string;
    history: string[];
    historyIndex: number = 0;

    textLimit = 50;
    historyLimit = 50;

    constructor() {
        this.history = [];
    }

    edit(text) {
        if (text.length > this.textLimit) {
            throw new Error("");
        }

        this.historyIndex++;

        this.text = text;

        this.history.push(text);
    }

    undo() {
        this.operation(-1);
    }

    redo() {
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