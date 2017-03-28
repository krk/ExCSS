
namespace ExCSS.Model.TextBlocks
{
    internal class CommentBlock : Block
    {
        private readonly static CommentBlock OpenBlock;
        private readonly static CommentBlock CloseBlock;

        public string Comment { get; set; }

        static CommentBlock()
        {
            OpenBlock = new CommentBlock { GrammarSegment = GrammarSegment.CommentOpen };
            CloseBlock = new CommentBlock { GrammarSegment = GrammarSegment.CommentClose };
        }

        public CommentBlock(string comment)
        {
            Comment = comment;
        }

        private CommentBlock()
        {
        }


        internal static CommentBlock Open
        {
            get { return OpenBlock; }
        }

        internal static CommentBlock Close
        {
            get { return CloseBlock; }
        }

        public override string ToString()
        {
            return GrammarSegment == GrammarSegment.CommentOpen ? "<!--" : "-->";
        }
    }
}
