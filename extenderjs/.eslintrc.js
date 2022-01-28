/* eslint-disable */
module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "impliedStrict": true,
            "jsx": false,
            "useJSXTextNode": true
        },
        "ecmaVersion": 6,
        "project": [
            "./tsconfig.json"
        ],
        "tsconfigRootDir": __dirname,
        "createDefaultProgram": true
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/ban-tslint-comment": "error",
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Boolean": {
                        "fixWith": "boolean",
                        "message": "use boolean instead"
                    },
                    "Number": {
                        "fixWith": "number",
                        "message": "use number instead"
                    },
                    "String": {
                        "fixWith": "string",
                        "message": "use string instead"
                    }
                },
                "extendDefaults": false
            }
        ],
        "@typescript-eslint/consistent-type-assertions": [
            "error",
            {
                "assertionStyle": "angle-bracket",
                "objectLiteralTypeAssertions": "allow"
            }
        ],
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/explicit-member-accessibility": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/member-delimiter-style": ["error", {
            "multiline": {
                "delimiter": "semi",
                "requireLast": true
            },
            "singleline": {
                "delimiter": "comma",
                "requireLast": false
            },
            "multilineDetection": "brackets"
        }],
        "@typescript-eslint/member-ordering": ["error",
            {
                "default": [
                    // Fields
                    "public-static-field",
                    "protected-static-field",
                    "private-static-field",
                    "public-decorated-field",
                    "protected-decorated-field",
                    "private-decorated-field",
                    "public-instance-field",
                    "protected-instance-field",
                    "private-instance-field",
                    "public-abstract-field",
                    "protected-abstract-field",
                    "private-abstract-field",

                    // Constructors
                    "public-constructor",
                    "protected-constructor",
                    "private-constructor",

                    // Getters
                    "public-static-get",
                    "public-decorated-get",
                    "public-instance-get",
                    "public-abstract-get",
                    "public-get",

                    "static-get",
                    "instance-get",
                    "abstract-get",
                    "decorated-get",
                    "get",

                    "protected-static-get",
                    "protected-decorated-get",
                    "protected-instance-get",
                    "protected-abstract-get",
                    "protected-get",

                    "private-static-get",
                    "private-decorated-get",
                    "private-instance-get",
                    "private-abstract-get",
                    "private-get",

                    // Setters
                    "public-static-set",
                    "public-decorated-set",
                    "public-instance-set",
                    "public-abstract-set",
                    "public-set",

                    "static-set",
                    "instance-set",
                    "abstract-set",
                    "decorated-set",
                    "set",

                    "protected-static-set",
                    "protected-decorated-set",
                    "protected-instance-set",
                    "protected-abstract-set",
                    "protected-set",

                    "private-static-set",
                    "private-decorated-set",
                    "private-instance-set",
                    "private-abstract-set",
                    "private-set",

                    // Methods
                    "public-static-method",
                    "public-decorated-method",
                    "public-instance-method",
                    "public-abstract-method",

                    "protected-static-method",
                    "protected-decorated-method",
                    "protected-instance-method",
                    "protected-abstract-method",

                    "private-static-method",
                    "private-decorated-method",
                    "private-instance-method",
                    "private-abstract-method"
                ]
            }
        ],
        "@typescript-eslint/method-signature-style": ["error", "method"],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": ["classProperty"],
                "modifiers": ["private", "protected"],
                "format": ["strictCamelCase"],
                "leadingUnderscore": "requireDouble",
                "trailingUnderscore": "forbid"
            },
            {
                "selector": ["class", "enum", "enumMember", "interface"],
                "format": ["PascalCase"],
                "leadingUnderscore": "forbid",
                "trailingUnderscore": "forbid"
            },
            {
                "selector": ["classProperty"],
                "modifiers": ["public"],
                "format": ["strictCamelCase"],
                "leadingUnderscore": "forbid",
                "trailingUnderscore": "forbid"
            },
            {
                "selector": ["variable", "function", "parameter", "classMethod", "accessor"],
                "format": ["strictCamelCase"],
                "leadingUnderscore": "forbid",
                "trailingUnderscore": "forbid"
            },
            {
                "selector": ["typeAlias", "typeParameter", "typeMethod", "objectLiteralMethod", "typeProperty", "objectLiteralProperty"],
                "format": ["strictCamelCase", "StrictPascalCase"],
                "leadingUnderscore": "forbid",
                "trailingUnderscore": "forbid"
            }
        ],
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": "error",
        "@typescript-eslint/no-dynamic-delete": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extraneous-class": [
            "error",
            {
                "allowStaticOnly": true
            }
        ],
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-meaningless-void-operator": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-parameter-properties": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-type-alias": [
            "error",
            {
                "allowAliases": "in-unions",
                "allowCallbacks": "always",
                "allowConditionalTypes": "always",
                "allowLiterals": "always",
                "allowMappedTypes": "always",
                "allowTupleTypes": "always",
                "allowGenerics": "always"
            }
        ],
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
        "@typescript-eslint/no-unnecessary-condition": [
            "warn",
            {
                "allowConstantLoopConditions": true
            }
        ],
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-literal-enum-member": [
            "error",
            {
                "allowBitwiseExpressions": true
            }
        ],
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/strict-boolean-expressions": ["error"],
        "@typescript-eslint/type-annotation-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "@typescript-eslint/typedef": [
            "error",
            {
                "arrayDestructuring": true,
                "arrowParameter": true,
                "memberVariableDeclaration": true,
                "objectDestructuring": true,
                "parameter": true,
                "propertyDeclaration": true,
                "variableDeclaration": false,
                "variableDeclarationIgnoreFunction": true
            }
        ],
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/unified-signatures": "error",



        "brace-style": "off",
        "@typescript-eslint/brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["error", "never"],
        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": ["error"],
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": ["error"],
        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": ["error", "never"],
        "indent": "off",
        "@typescript-eslint/indent": ["error", 4],
        "keyword-spacing": "off",
        "@typescript-eslint/keyword-spacing": [
            "error",
            {
                "before": false,
                "after": true,
                "overrides": {
                    "as": {
                        "before": true,
                        "after": true
                    },
                    "from": {
                        "before": true,
                        "after": true
                    }
                }
            }
        ],
        "lines-between-class-members": "off",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": ["error"],
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": ["error"],
        "no-duplicate-imports": "off",
        "@typescript-eslint/no-duplicate-imports": ["error"],
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": [
            "error",
            {
                "allow": ["constructors"]
            }
        ],
        "no-extra-parens": "off",
        "@typescript-eslint/no-extra-parens": ["error", "all"],
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": ["error"],
        "no-implied-eval": "off",
        "@typescript-eslint/no-implied-eval": ["error"],
        "no-invalid-this": "off",
        "@typescript-eslint/no-invalid-this": ["error"],
        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": ["error"],
        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": ["error"],
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": ["error"],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "no-throw-literal": "off",
        "@typescript-eslint/no-throw-literal": ["error"],
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": ["error"],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["off"],
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": ["error"],
        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": ["error", "always"],
        "quotes": "off",
        "@typescript-eslint/quotes": ["error", "double"],
        "require-await": "off",
        "@typescript-eslint/require-await": "error",
        "no-return-await": "off",
        "@typescript-eslint/return-await": ["error", "always"],
        "semi": "off",
        "@typescript-eslint/semi": ["error", "always"],
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": ["error", { "int32Hint": false }],

        "@typescript-eslint/triple-slash-reference": "off",
        "no-constant-condition": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "no-case-declarations": "off"
    }
}