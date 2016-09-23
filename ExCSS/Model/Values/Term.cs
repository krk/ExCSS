
// ReSharper disable once CheckNamespace
using Shaman.Runtime;
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

namespace ExCSS
{
    public abstract class Term
    {
        public static readonly InheritTerm Inherit = new InheritTerm();
        public abstract void ToString(StringBuilder sb);

        public override string ToString()
        {
            var sb = ReseekableStringBuilder.AcquirePooledStringBuilder();
            ToString(sb);
            return ReseekableStringBuilder.GetValueAndRelease(sb);
        }
    }
}
