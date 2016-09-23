using System.Collections.Generic;
using ExCSS.Model;
using System.Text;
using ExCSS.Model.Extensions;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif
// ReSharper disable once CheckNamespace
namespace ExCSS
{
    public abstract class AggregateRule : RuleSet, ISupportsRuleSets
    {
        protected AggregateRule()
        {
            RuleSets = new List<RuleSet>();
        }

        public List<RuleSet> RuleSets { get; private set; }

        protected void RuleSetsToString(StringBuilder sb, bool friendlyFormat, int indentation)
        {
            //if (friendlyFormat) sb.NewLineIndent("", true, indentation + 1);
            
            foreach (var r in RuleSets)
            {
                r.ToString(sb, friendlyFormat, indentation + 1);
            }
        }
    }
}
