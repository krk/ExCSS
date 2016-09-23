using ExCSS.Model.Extensions;
using Shaman.Runtime;
using System.Text;
#if SALTARELLE
using StringBuilder = System.Text.Saltarelle.StringBuilder;
#endif

// ReSharper disable once CheckNamespace
namespace ExCSS
{
    public class Property
    {
        private Term _term;
        private bool _important;
        
        public Property(string name)
        {
            Name = name;
        }

        public string Name { get; private set; }

        public Term Term
        {
            get { return _term; }
            set { _term = value; }
        }

        public bool Important
        {
            get { return _important; }
            set { _important = value; }
        }

        public override string ToString()
        {
            var sb = ReseekableStringBuilder.AcquirePooledStringBuilder();
            ToString(sb, false);
            return ReseekableStringBuilder.GetValueAndRelease(sb);
        }

        public void ToString(StringBuilder sb, bool friendlyFormat, int indentation = 0)
        {
            sb.Indent(friendlyFormat, indentation);
            sb.Append(Name);
            sb.Append(':');
            _term?.ToString(sb);
            if (_important)
            {
                sb.Append(" !important");
            }


        }
    }
}
