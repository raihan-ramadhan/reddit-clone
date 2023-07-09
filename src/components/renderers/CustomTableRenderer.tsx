"use client";

function CustomTableRenderer({ data }: any) {
  const { content } = data;

  if (!content || !Array.isArray(content)) {
    return null;
  }

  return (
    <table className="border-collapse border border-gray-300 w-full">
      <tbody>
        {content.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b border-gray-300">
            {row.map((cell: any, cellIndex: any) => (
              <td key={cellIndex} className="p-2 border border-gray-300">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomTableRenderer;
