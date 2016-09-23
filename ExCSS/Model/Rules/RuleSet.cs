
// ReSharper disable once CheckNamespace
using Shaman.Runtime;
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

namespace ExCSS
{
    public abstract class RuleSet
    {
        internal RuleSet()
        {
            RuleType = RuleType.Unknown;
        }

        public RuleType RuleType { get; set; }

        public abstract void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0);

        public override string ToString()
        {
            var sb = ReseekableStringBuilder.AcquirePooledStringBuilder();
            ToString(sb, false);
            return ReseekableStringBuilder.GetValueAndRelease(sb);
        }
    }
}
