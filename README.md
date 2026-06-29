# Finance Logger

A simple **TypeScript Finance Logger** application that demonstrates TypeScript fundamentals such as classes, interfaces, enums, modules, and DOM manipulation.

Users can create either **Invoices** or **Payments**, submit them through a form, and have the formatted results displayed in a list.

---

## Features

* Create finance entries as either:
  * Invoice
  * Payment
* Object-oriented design using TypeScript classes
* Shared interface for formatting output
* Enum-based document type selection
* Dynamic DOM rendering
* Strict TypeScript configuration
* Compiled JavaScript output included

---

## Project Structure

```
docs/
├── src/
│   ├── classes/
│   │   ├── invoice.ts
│   │   ├── payment.ts
│   │   └── listTemplates.ts
│   ├── interfaces/
│   │   └── hasFormatter.ts
│   ├── app.ts
│   ├── store.ts
│   └── test.ts
│
├── public/
│   ├── classes/
│   ├── interfaces/
│   ├── app.js
│   ├── index.html
│   ├── style.css
│   └── store.js
│
└── tsconfig.json
```

---

## Technologies

* TypeScript, compiled into JavaScript (ES6 Modules)
* HTML5
* CSS3
* Bootstrap 5

---

## TypeScript Concepts Demonstrated

* Classes
* Interfaces
* Enums
* Access modifiers (`private`)
* Tuples
* Union types
* Type aliases
* Modules
* DOM type assertions
* Strict type checking

---

## How It Works

1. Select a document type (Invoice or Payment).
2. Enter:

   * Client / Recipient
   * Details
   * Amount
3. Submit the form.
4. The application:

   * Creates either an `Invoice` or `Payment` object.
   * Formats it using the shared interface.
   * Renders it into the list.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

Install TypeScript if needed:

```bash
npm install -g typescript
```

Compile the project:

```bash
tsc
```

---

## Running

After compilation, open:

```
docs/public/index.html
```

in your browser.

Alternatively, use a local development server (recommended for ES Modules), for example:

```bash
npx serve docs/public
```

or

```bash
npx http-server docs/public
```

---

## Example Output

Invoice:

```
John owes ₦5000 for Website Design
```

Payment:

```
Alice is owed ₦2500 for Domain Renewal
```

---

## Learning Goals

This project is useful for learning:

* TypeScript syntax
* Interfaces
* Object-Oriented Programming
* Module imports/exports
* Working with the DOM in TypeScript
* Compiling TypeScript into JavaScript

---

## License

This project is available for educational purposes. Add a license (such as MIT) if you plan to distribute or publish it.
