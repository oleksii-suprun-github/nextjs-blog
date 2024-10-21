import SyntaxHighlighter from 'react-syntax-highlighter';
import highlightTheme from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark';

export const codeComponent = ({ value }: { value: { language?: string; code?: string } }) => {
  if (value?.language && value?.code) {
    return (
      <div className="my-10">
        <SyntaxHighlighter language={value.language} style={highlightTheme}>
          {value.code}
        </SyntaxHighlighter>
      </div>
    );
  }
};
