const rule = require("../../../lib/rules/zhlint");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });
ruleTester.run("zhlint", rule, {
  valid: [
    `"你好\\nabc"`,
    `"2020年10月10日"`,
    "`你好\nabc`",
    '"../../constants/config"',
    {
      code: `"你好（世界）"`,
      options: [{ zhlint: { rules: { fullWidthPunctuation: "（）" } } }],
    },
  ],
  invalid: [
    {
      code: `"你好abc"`,
      errors: [
        {
          messageId: "zhlint",
        },
      ],
      output: `"你好 abc"`,
    },
    {
      code: "`你好abc`",
      errors: [
        {
          messageId: "zhlint",
        },
      ],
      output: "`你好 abc`",
    },
    {
      code: "`你好${'\\n'}我可以吞下玻璃quick fox`",
      errors: [
        {
          messageId: "zhlint",
        },
      ],
      output: "`你好${'\\n'}我可以吞下玻璃 quick fox`",
    },
    {
      code: `/** 你好abc\n再见 abc */`,
      errors: [
        {
          messageId: "zhlint",
        },
      ],
      output: `/** 你好 abc\n再见 abc */`,
    },
    {
      code: `// 你好abc`,
      errors: [
        {
          messageId: "zhlint",
        },
      ],
      output: `// 你好 abc`,
    },
  ],
});
