
using Shaman.Runtime;
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

namespace ExCSS.Model.TextBlocks
{
    internal class BracketBlock : Block
    {
        private readonly static BracketBlock RoundOpen= new BracketBlock { GrammarSegment = GrammarSegment.ParenOpen, _mirror = GrammarSegment.ParenClose };
        private readonly static BracketBlock RoundClose = new BracketBlock { GrammarSegment = GrammarSegment.ParenClose, _mirror = GrammarSegment.ParenOpen };
        private readonly static BracketBlock CurlyOpen = new BracketBlock { GrammarSegment = GrammarSegment.CurlyBraceOpen, _mirror = GrammarSegment.CurlyBracketClose };
        private readonly static BracketBlock CurlyClose = new BracketBlock { GrammarSegment = GrammarSegment.CurlyBracketClose, _mirror = GrammarSegment.CurlyBraceOpen };
        private readonly static BracketBlock SquareOpen = new BracketBlock { GrammarSegment = GrammarSegment.SquareBraceOpen, _mirror = GrammarSegment.SquareBracketClose };
        private readonly static BracketBlock SquareClose = new BracketBlock { GrammarSegment = GrammarSegment.SquareBracketClose, _mirror = GrammarSegment.SquareBraceOpen };

        private GrammarSegment _mirror;

        BracketBlock()
        {
        }
 
        internal char Open
        {
            get
            {
                switch (GrammarSegment)
                {
                    case GrammarSegment.ParenOpen:
                        return '(';
                       
                    case GrammarSegment.SquareBraceOpen:
                        return '[';
                       
                    default:
                        return '{';
                       
                }
            }
        }

        internal char Close
        {
            get
            {
                switch (GrammarSegment)
                {
                    case GrammarSegment.ParenOpen:
                        return ')';
                      
                    case GrammarSegment.SquareBraceOpen:
                        return ']';
                       
                    default:
                        return '}';
                      
                }
            }
        }

        internal GrammarSegment Mirror
        {
            get { return _mirror; }
        }

        internal static BracketBlock OpenRound
        {
            get { return RoundOpen; }
        }

        internal static BracketBlock CloseRound
        {
            get { return RoundClose; }
        }

        internal static BracketBlock OpenCurly
        {
            get { return CurlyOpen; }
        }

        internal static BracketBlock CloseCurly
        {
            get { return CurlyClose; }
        }

        internal static BracketBlock OpenSquare
        {
            get { return SquareOpen; }
        }

        internal static BracketBlock CloseSquare
        {
            get { return SquareClose; }
        }

        public override string ToString()
        {
            var sb = ReseekableStringBuilder.AcquirePooledStringBuilder();
            ToString(sb, false);
            return ReseekableStringBuilder.GetValueAndRelease(sb);
        }

        public void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0)
        {
            char ch;
            switch (GrammarSegment)
            {
                case GrammarSegment.CurlyBraceOpen:
                    ch = '{';
                    break;
                case GrammarSegment.CurlyBracketClose:
                    ch = '}';
                    break;
                case GrammarSegment.ParenClose:
                    ch = ')';
                    break;
                case GrammarSegment.ParenOpen:
                    ch = '(';
                    break;

                case GrammarSegment.SquareBracketClose:
                    ch = ']';
                    break;

                case GrammarSegment.SquareBraceOpen:
                    ch = '[';
                    break;
                default:
                    return;
            }

            sb.Append(ch);
        }
    }
}
