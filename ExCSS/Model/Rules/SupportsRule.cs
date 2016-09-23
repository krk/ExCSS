using System.Linq;
using ExCSS.Model.Extensions;
using System.Text;
using System;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

// ReSharper disable once CheckNamespace
namespace ExCSS
{
    public class SupportsRule : ConditionalRule
    {
        private string _condition;

        public SupportsRule()
        {
            RuleType = RuleType.Supports;
            _condition = string.Empty;
            AtRuleKeyword = "supports";
        }

        public string AtRuleKeyword { get; internal set; }

        public override string Condition
        {
            get { return _condition; }
            set { _condition = value; }
        }

        public bool IsSupported{ get; set; }


        public override void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0)
        {
            sb.NewLineIndent(friendlyFormat, indentation);
            sb.Append('@');
            sb.Append(AtRuleKeyword);
            sb.Append(' ');
            sb.Append(_condition);
            sb.Append('{');

            RuleSetsToString(sb, friendlyFormat, indentation);

            sb.NewLineIndent("}", friendlyFormat, indentation);
        }

        
    }
}
