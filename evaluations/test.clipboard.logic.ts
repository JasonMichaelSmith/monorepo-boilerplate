class TextInput {
    private text: string;
    private version: number = 0;
    private versions: string[];

    public MAX_CHARS = 20;
    public MAX_HISTORY = 5;

    constructor() {
        this.versions = [];
    }

    edit(text: string) {
        if (text.length > this.MAX_CHARS) {
            throw new Error(`Edit text length (${text.length}) over MAX_CHARS: ${this.MAX_CHARS}`);
        }

        this.text = text;
        this.versions.splice(this.version, 0, text);

        if (this.versions.length > this.MAX_HISTORY) {
            console.warn(`Edit text history reached: ${this.MAX_HISTORY}`);
            this.versions.pop();
        }

        console.log(this.version, this.versions);
    }

    redo() {
        this.version--;
        if (this.version < 0) this.version = 0;
        this.text = this.versions[this.version];
    }

    undo() {
        this.version++;
        if (this.version > this.versions.length - 1) this.version = this.versions.length - 1;
        this.text = this.versions[this.version];
    }

    getCurrentState() {
        return this.text;
    }

    // Utils

    canUndo(): boolean {
        return this.version <
            this.versions.length - 1;
    }
    canRedo(): boolean { return this.version > 0; }
    getHistorySize(): number { return this.versions.length; }

    clearHistory(): void {
        this.versions = [];
        this.version = 0;
    }
}

const editor = new TextInput();

editor.edit('First version');
editor.edit('Second version');
editor.undo();

console.log('1: First version', editor.getCurrentState()); // Should return "First version"
editor.redo();
console.log('2: Second version', editor.getCurrentState()); // Should return "Second version"
editor.undo();
console.log('3: First version', editor.getCurrentState()); // Should return "First version"
editor.edit('Third version');
console.log('4: Third version', editor.getCurrentState()); // Should return "Third version"
editor.undo();
console.log('5: First version', editor.getCurrentState()); // Should return "First version"
editor.redo();
console.log('6: Third version', editor.getCurrentState()); // Should return "Third version"

//editor.edit('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'); // Error