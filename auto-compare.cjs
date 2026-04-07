const fs = require('fs');
const path = require('path');
const https = require('https');

// 원본 사이트 URL과 추출된 텍스트 파일 매핑
const comparisons = [
  { name: 'term-dfinery', url: 'https://igaworks.com/term/dfinery' },
  { name: 'term-adbrix', url: 'https://igaworks.com/term/adbrix' },
  { name: 'term-mobileindex', url: 'https://igaworks.com/term/mobileindex' },
  { name: 'term-tvindex', url: 'https://igaworks.com/term/tvindex' },
  { name: 'term-tradingworks', url: 'https://igaworks.com/term/tradingworks' },
  { name: 'term-advertisement', url: 'https://igaworks.com/term/advertisement' },
  { name: 'privacy-content', url: 'https://igaworks.com/privacy' },
  { name: 'privacy-custom-ad', url: 'https://igaworks.com/privacy/custom_ad' },
  { name: 'copyright-content', url: 'https://igaworks.com/copyright' },
  { name: 'old-dfinery-210831', url: 'https://igaworks.com/term/dfinery/210831' },
  { name: 'old-dfinery-230531', url: 'https://igaworks.com/term/dfinery/230531' },
  { name: 'old-dfinery-230601', url: 'https://igaworks.com/term/dfinery/230601' },
  { name: 'old-mobileindex-20160701', url: 'https://igaworks.com/term/mobileindex/20160701' },
  { name: 'old-mobileindex-20210924', url: 'https://igaworks.com/term/mobileindex/20210924' },
  { name: 'old-mobileindex-20220801', url: 'https://igaworks.com/term/mobileindex/20220801' },
  { name: 'old-privacy-160520', url: 'https://igaworks.com/privacy/160520' },
  { name: 'old-privacy-170715', url: 'https://igaworks.com/privacy/170715' },
  { name: 'old-privacy-171101', url: 'https://igaworks.com/privacy/171101' },
  { name: 'old-privacy-200717', url: 'https://igaworks.com/privacy/200717' },
  { name: 'old-privacy-210801', url: 'https://igaworks.com/privacy/210801' },
  { name: 'old-privacy-220117', url: 'https://igaworks.com/privacy/220117' },
  { name: 'old-privacy-230417', url: 'https://igaworks.com/privacy/230417' },
  { name: 'old-privacy-230901', url: 'https://igaworks.com/privacy/230901' },
  { name: 'old-privacy-241115', url: 'https://igaworks.com/privacy/241115' },
  { name: 'old-privacy-250520', url: 'https://igaworks.com/privacy/250520' },
  { name: 'old-privacy-251120', url: 'https://igaworks.com/privacy/251120' },
];

// 텍스트 정규화 (비교용)
function normalize(text) {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0)
    .join('\n');
}
