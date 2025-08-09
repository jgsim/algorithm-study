네, LeetCode "Find the Index of the First Occurrence in a String" 문제의 코드 리뷰를 시작하겠습니다.

사용자님께서 정확히 보셨습니다. 제출하신 코드는 **정답으로 통과는 되지만, 문제의 출제 의도와는 거리가 있는 풀이**입니다.

---

### \#\# 1. 제출된 코드 리뷰 (`indexOf` 사용)

```javascript
function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}
```

- **정확성 및 효율성:** 이 코드는 100% 정답입니다. JavaScript의 내장 `indexOf` 메소드는 매우 효율적으로 구현되어 있어, 대부분의 경우 C++로 작성된 고도로 최적화된 알고리즘(보이어-무어 또는 그와 유사한)으로 동작합니다. 따라서 성능상으로도 전혀 문제가 없습니다.
- **실용성:** 실제 현업에서 코드를 작성한다면, 당연히 이 방법이 **가장 바람직하고 올바른 코드**입니다. 이미 검증되고 최적화된 내장 API를 두고 굳이 직접 문자열 검색 알고리즘을 구현할 이유는 없습니다.

---

### \#\# 2. 출제 의도 및 학습 관점

이 문제는 코딩 테스트에서 지원자가 **문자열 검색 알고리즘을 직접 구현할 수 있는지**를 확인하기 위해 출제됩니다. `indexOf`를 금지하는 명시적인 제약 조건은 없지만, 그렇게 푸는 것은 마치 "정렬 문제를 `Array.sort()`로 푸는 것"과 같아서 알고리즘 실력을 보여주기 어렵습니다.

이 문제를 통해 연습해야 하는 대표적인 알고리즘은 두 가지입니다.

#### \#\#\#\# **방법 1: 브루트 포스 (Brute-Force) / 단순 비교**

가장 기본적이고 직관적인 방법입니다. `haystack`의 각 위치에서부터 `needle`과 일치하는지 한 글자씩 비교합니다.

- **시간 복잡도:** O( (N-M) \* M ) - `N`: haystack 길이, `M`: needle 길이 (최악의 경우 O(N\*M))

<!-- end list -->

```javascript
function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0;
  if (haystack.length < needle.length) return -1;

  // haystack의 각 문자를 시작점으로 순회
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let found = true;
    // needle의 길이만큼 비교
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break; // 한 글자라도 다르면 내부 루프 중단
      }
    }
    if (found) {
      return i; // 모든 글자가 일치하면 시작 인덱스 반환
    }
  }

  return -1; // 끝까지 찾아도 없으면 -1 반환
}
```

이 문제는 보통 위 코드처럼 브루트 포스 방식으로만 풀어도 통과됩니다.

#### \#\#\#\# **방법 2: KMP 알고리즘 (Knuth-Morris-Pratt)**

문자열 검색 알고리즘의 '정석'입니다. `needle` 문자열의 접두사와 접미사 정보를 미리 분석하여, 비교 중에 불일치가 발생했을 때 **불필요한 비교를 건너뛰고(점프하고) 탐색을 재개**하는 매우 효율적인 알고리즘입니다.

- **시간 복잡도:** O(N + M) - 브루트 포스보다 훨씬 효율적입니다.
- **핵심:** `lps` (Longest Proper Prefix which is also Suffix) 배열, 즉 '부분 일치 테이블'을 만드는 것이 핵심입니다.

KMP 알고리즘은 구현이 복잡하여 이 문제를 통해 처음부터 완벽히 이해하고 짜기는 어렵습니다. 하지만 "이런 최적화 방식이 있구나"라고 알아두는 것만으로도 큰 의미가 있습니다.

---

### \#\# 결론

- **실전 코드로는 `indexOf`가 최고입니다.**
- **코딩 테스트에서는 '브루트 포스' 방식으로 직접 구현하는 것**이 최소한의 출제 의도를 만족하는 풀이입니다.
- \*\*더 깊이 공부하고 싶다면 'KMP 알고리즘'\*\*이 무엇인지, 어떤 원리로 불필요한 비교를 건너뛰는지 개념적으로 이해하는 것을 목표로 삼으시면 좋습니다.
