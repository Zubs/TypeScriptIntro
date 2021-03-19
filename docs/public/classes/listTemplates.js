export class ListTemplates {
    constructor(container) {
        this.container = container;
    }
    ;
    render(item, heading, pos) {
        // Create List item
        const li = document.createElement('li');
        // Create heading
        const h4 = document.createElement('h4');
        // Put User Entered Text In h4
        h4.innerText = heading;
        // Put h4 In List
        li.append(h4);
        // Create Paragraph
        const p = document.createElement('p');
        // Set p
        p.innerHTML = item.format();
        // Add Paragrapth To List Too
        li.append(p);
        // Add The li To The User's Chosen Position
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else if (pos === 'end') {
            this.container.append(li);
        }
        ;
    }
    ;
}
;
