﻿using System;
using System.Collections.Generic;

namespace ExCSS.Model.Extensions
{
    static class CharacterExtensions
    {
        public static char ToLower(this char character)
        {
            return (char)(character + 0x20);
        }

        public static int FromHex(this char character)
        {
            return character.IsDigit() ? character - 0x30 : character - (character.IsLowercaseAscii() ? 0x57 : 0x37);
        }

        public static string TrimArray(this char[] array)
        {
            var start = 0;
            var end = array.Length - 1;

            while (start < array.Length && array[start].IsSpaceCharacter())
            {
                start++;
            }

            while (end > start && array[end].IsSpaceCharacter())
            {
                end--;
            }

            return new string(array, start, 1 + end - start);
        }

        public static string[] SplitOnCommas(this string value)
        {
            var list = new List<string>();
            var buffer = new List<char>();
            var chars = value.ToCharArray();

            for (var i = 0; i <= chars.Length; i++)
            {
                if (i == chars.Length || chars[i] == ',')
                {
                    if (buffer.Count > 0)
                    {
                        var token = buffer.ToArray().TrimArray();

                        if (token.Length != 0)
                        {
                            list.Add(token);
                        }

                        buffer.Clear();
                    }
                }
                else
                {
                    buffer.Add(chars[i]);
                }
            }

            return list.ToArray();
        }

        public static string ToHex(this byte num)
        {
            var chrs = new char[2];
            var rem = num >> 4;
            chrs[0] = (char)(rem + (rem < 10 ? 48 : 55));
            rem = num - 16 * rem;
            chrs[1] = (char)(rem + (rem < 10 ? 48 : 55));

            return new string(chrs);
        }
    }
}