export class Project {
    id: number;
    title: string;

    constructor(id: number, title: string) {
        // Validations here if required.

        this.id = id;
        this.title = title;
    }
}