'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import Heading from '@tiptap/extension-heading';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import Blockquote from '@tiptap/extension-blockquote';
import CodeBlock from '@tiptap/extension-code-block';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Image from '@tiptap/extension-image';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Highlight,
      Heading.configure({ levels: [1, 2, 3] }),
      BulletList,
      OrderedList,
      ListItem,
      Blockquote,
      CodeBlock,
      HorizontalRule,
      Image,
    ],
    content: '<p>Comece a escrever...</p>',
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="editor-container">
      <div className="toolbar flex flex-row gap-6">
        <button onClick={() => editor.chain().focus().toggleBold().run()}>B</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>I</button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()}>U</button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()}>S</button>
        <button onClick={() => editor.chain().focus().setTextAlign('left').run()}>Left</button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()}>Center</button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()}>Right</button>
        <button onClick={() => editor.chain().focus().setHighlight().run()}>Highlight</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. List</button>
        <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>Blockquote</button>
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>Code</button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>HR</button>
        <button onClick={() => {
          const url = window.prompt('Enter image URL');
          if (url) editor.chain().focus().setImage({ src: url }).run();
        }}>Image</button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;