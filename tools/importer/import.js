const createCardBlock = (main, document) => {
  const articles = document.querySelectorAll('.frame .design-style');


  // helper to create the metadata block
  const block = WebImporter.Blocks.getMetadataBlock(document, meta);

  // append the block to the main element
  main.append(block);

  // returning the meta object might be usefull to other rules
  return meta;
};

export default {
  transformDOM: ({ document }) => {
    const main = document.querySelector('body');


createMetadataBlock(main,document);
    // final cleanup
    WebImporter.DOMUtils.remove(main, [
            'header',
            'nav',
            '.nav',
            'footer',
            '.footer',
            'iframe',
            'noscript','.disclaimer',
    ]);
    WebImporter.Blocks.convertBlocksToTables(main.querySelector('article'),document)

    return main;
  },
};