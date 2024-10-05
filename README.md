



 **LinkedIn Reply Generator Chrome Extension**

A Chrome extension that assists users in generating replies to LinkedIn messages. This extension injects a magic wand icon into LinkedIn's messaging interface, allowing users to open a modal that suggests responses. Built using React, TypeScript, Tailwind CSS, and the WXT (Next-gen Web Extension Framework).

---

## **Features**

- **LinkedIn Integration**: Automatically injects a UI into LinkedIn's message composer.
- **Magic Wand Icon**: Displays an icon when focused on a message input field.
- **Custom Modal**: Opens a modal to assist users in generating reply suggestions.
- **React & Tailwind**: Utilizes React components and Tailwind CSS for a responsive and modern UI.
- **Content Script**: Seamlessly interacts with the DOM of LinkedIn.

---

 **Technologies Used**

- **React**: Frontend framework for building dynamic user interfaces.
- **TypeScript**: Superset of JavaScript with static types for safer code.
- **Tailwind CSS**: Utility-first CSS framework for styling the extension.
- **WXT Framework**: A modern web extension framework that simplifies development.
- **pnpm**: Package manager for faster installations and streamlined dependency management.

---

## **Project Structure**

```bash
root/
├── entrypoints/
│   ├── Content.tsx          # Main content script logic
│   ├── popup/
│   │   ├── App.tsx          # Popup UI logic
│   │   ├── index.html       # Popup HTML file
│   │   └── Main.tsx         # Entry point for popup UI
│   ├── Background.ts        # Background script logic
│   └── style.css            # Tailwind CSS styles
├── features/
│   └── PromptModal.tsx       # Modal component for reply suggestions
├── manifest.json             # Extension manifest configuration
├── package.json              # Project metadata and dependencies
├── pnpm-lock.yaml            # Dependency lockfile
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── wxt.config.ts             # WXT framework configuration
```

---

## **Installation**

### **Requirements**

- Node.js (v14+)
- pnpm (v7+)
- Chrome browser (for loading the extension)
- WXT Framework

### **Clone the Repository**

```bash
git clone https://github.com/anand-suman/chrome-extension-with-wxt.git
cd chrome-extension-with-wxt
```

### **Install Dependencies**

This project uses `pnpm` for package management. If you don't have `pnpm` installed, you can install it with:

```bash
npm install -g pnpm
```

Then install project dependencies:

```bash
pnpm install
```

### **Build the Project**

Run the following command to build the extension:

```bash
pnpm build
```

This will generate the final build inside the `dist/` directory.

---

## **Usage**

1. **Load the Extension in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer Mode** using the toggle switch in the top-right corner.
   - Click **Load unpacked** and select the `dist/` directory.

2. **Navigate to LinkedIn:**
   - Go to LinkedIn's messaging interface (`https://www.linkedin.com/`).
   - Click on any conversation to start composing a message.

3. **Use the Magic Wand:**
   - When you focus on the message input field, a magic wand icon will appear.
   - Click the icon to open the reply suggestion modal.
   - Use the modal to generate message suggestions and insert them into the input field.

---

## **Development**

### **Running in Development Mode**

During development, you can continuously watch for changes and rebuild the project by running:

```bash
pnpm dev
```

After building, reload the extension in Chrome to see the changes.

---

## **Configuration**

### **Tailwind CSS**

Tailwind CSS is used for styling in this project. To modify the styling or extend the theme, edit the `tailwind.config.js` file:

```js
module.exports = {
  content: ["./entrypoints/**/*.{html,ts,tsx,js,jsx}", "./features/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### **WXT Config**

The WXT framework configuration file is located at `wxt.config.ts`. It specifies the entry points for the content script, popup, and background script:

```ts
import { defineConfig } from "@wxt/cli";

export default defineConfig({
  input: {
    content: "entrypoints/Content.tsx",
    popup: "entrypoints/popup/Main.tsx",
    background: "entrypoints/Background.ts",
  },
  output: {
    dir: "dist",
  },
});
```

---

## **Contributing**

Contributions are welcome! Feel free to submit a pull request or open an issue for bug fixes or feature suggestions.

### **How to Contribute:**

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Push your branch and submit a pull request.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## **Contact**

For any questions or issues, feel free to reach out to me:

- **Email**: [anand.k.suman0705@gmail.com](mailto:anand.k.suman0705@gmail.com)

---

## **Acknowledgments**

Special thanks to the creators of WXT, React, TypeScript, and Tailwind CSS for providing the tools that made this extension possible!

---

### **Screenshots**

Include screenshots or demo GIFs to make your README more visually appealing. You can add something like:

```
https://github.com/user-attachments/assets/df8e547c-0c55-4959-8093-3a3760595602
```

