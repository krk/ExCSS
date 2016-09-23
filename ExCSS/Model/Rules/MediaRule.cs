using System;
using System.Linq;
using ExCSS.Model;
using ExCSS.Model.Extensions;
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

// ReSharper disable once CheckNamespace
namespace ExCSS
{
    public class MediaRule : ConditionalRule, ISupportsMedia
    {
        private readonly MediaTypeList _media;

        public MediaRule() 
        {
            _media = new MediaTypeList();
            RuleType = RuleType.Media;
        }

        public override string Condition
        {
            get { return _media.MediaType; }
            set { _media.MediaType = value; }
        }

        public MediaTypeList Media
        {
            get { return _media; }
        }

        
        public override void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0)
        {
            sb.NewLineIndent(friendlyFormat, indentation);
            sb.Append("@media ");
            sb.Append(_media.MediaType);
            sb.Append("{");
            RuleSetsToString(sb, friendlyFormat, indentation);
            sb.NewLineIndent("}", friendlyFormat, indentation);
        }
    }
}
