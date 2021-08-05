customElements.define('my-paragraph',
    class extends HTMLElement {
        constructor() {
            super();

            const template = document.getElementById('my-paragraph');
            const templateContent = template.content;

            this.attachShadow({ mode: 'open' }).appendChild(
                templateContent.cloneNode(true)
            );
        }
    }
);

const myParagraph = `<template id="my-paragraph">
<style>
    p {
        color: white;
        background-color: #666;
        padding: 5px;
    }
</style>
<p>
    <slot name="my-text">My default text</slot>
</p>
</template>

<my-paragraph>
<span slot="my-text">Let's have some different text!</span>
</my-paragraph>

<my-paragraph>
<ul slot="my-text">
    <li>Let's have some different text!</li>
    <li>In a list!</li>
</ul>
</my-paragraph>`

export default myParagraph