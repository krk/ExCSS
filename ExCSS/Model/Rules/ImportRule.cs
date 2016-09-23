using ExCSS.Model;
using ExCSS.Model.Extensions;
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

// ReSharper disable once CheckNamespace
namespace ExCSS
{
    public class ImportRule : RuleSet, ISupportsMedia
    {
        private string _href;
        private readonly MediaTypeList _media;

        public ImportRule() 
        {
            _media = new MediaTypeList();
            RuleType = RuleType.Import;
        }
      
        public string Href
        {
            get { return _href; }
            set { _href = value; }
        }

        public MediaTypeList Media
        {
            get { return _media; }
        }

        

        public override void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0)
        {
            sb.NewLineIndent(friendlyFormat, indentation);
            sb.Append("@import url(");
            sb.Append(_href);
            if (_media.Count > 0)
            {
                sb.Append(") ");
                sb.Append(_media);
                sb.Append(';');
            }
            else
            {
                sb.Append(");");
            }
        }
    }
}
