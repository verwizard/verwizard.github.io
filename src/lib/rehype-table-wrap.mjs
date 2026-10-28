/**
 * 给 Markdown 顶层生成的 <table> 包一层 .table-wrap。
 * 目的是让窄屏下由外层容器横向滚动，而不是把表格本身改成 display:block
 * 再强制 white-space:nowrap（那会让本来能折行的表格变成单行）。
 */
export function rehypeTableWrap() {
  return (tree) => {
    if (!Array.isArray(tree.children)) return;

    tree.children = tree.children.map((node) => {
      if (node.type !== 'element' || node.tagName !== 'table') return node;
      return {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-wrap'] },
        children: [node],
      };
    });
  };
}
