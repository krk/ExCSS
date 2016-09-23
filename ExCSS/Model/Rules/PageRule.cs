using ExCSS.Model;
using ExCSS.Model.Extensions;
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

// ReSharper disable once CheckNamespace
namespace ExCSS
{
    public class PageRule : RuleSet, ISupportsSelector, ISupportsDeclarations
    {
        private readonly StyleDeclaration _declarations;
        private BaseSelector _selector;

        public PageRule() 
        {
            _declarations = new StyleDeclaration();
            RuleType = RuleType.Page;
        }

        internal PageRule AppendRule(Property rule)
        {
            _declarations.Properties.Add(rule);
            return this;
        }

        public BaseSelector Selector
        {
            get { return _selector; }
            set
            {
                _selector = value;
            }
        }

        public StyleDeclaration Declarations
        {
            get { return _declarations; }
        }

     

        public override void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0)
        {
            sb.NewLineIndent(friendlyFormat, indentation);
            sb.Append("@page ");
            
            if (_selector != null)
            {
                sb.Append(':');
                _selector.ToString(sb);
            }
            sb.Append('{');

            _declarations.ToString(sb, friendlyFormat, indentation);
            sb.NewLineIndent("}", friendlyFormat, indentation);
        }
    }
}
