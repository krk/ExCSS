using System;
using ExCSS.Model;
using ExCSS.Model.Extensions;
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

// ReSharper disable once CheckNamespace
namespace ExCSS
{
    public class ViewportRule : RuleSet, ISupportsDeclarations
    {

        private readonly StyleDeclaration _declarations;

        public ViewportRule() : this(new StyleDeclaration())
        { }

        public ViewportRule(StyleDeclaration declarations)
        {
            RuleType = RuleType.Viewport;
            _declarations = declarations;
            AtRuleKeyword = "viewport";
        }



        public StyleDeclaration Declarations
        {
            get { return _declarations; }
        }

        
        public string AtRuleKeyword { get; set; }

        public override void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0)
        {
            sb.Append('@');
            sb.Append(AtRuleKeyword);
            sb.Append('{');
            _declarations.ToString(sb, friendlyFormat, indentation);
            sb.NewLineIndent("}", friendlyFormat, indentation);
        }
    }
}
