module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    // 禁用未使用变量的警告
    '@typescript-eslint/no-unused-vars': 'off',
    // 禁用未转义实体的警告
    'react/no-unescaped-entities': 'off',
  },
} 