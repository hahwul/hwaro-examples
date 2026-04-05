#!/bin/bash

# Start from line 16 (skipping the first 15 which already spawned)
tail -n +16 themes.txt | while IFS= read -r line; do
  theme=$(echo "$line" | sed 's/^[0-9]*\. //')
  prompt="Hwaro 예제 사이트 '${theme}' 테마를 추가하는 작업을 진행해주세요. (모델 지정이 가능하다면 Claude 3.1 Pro를 사용해주세요)
아래의 플로우를 따라주세요:
1. 아이디어에 대한 웹 구현 (Hwaro 사이트 디렉토리, config.toml, 템플릿, 에셋 생성)
2. 구현물에 대한 검토 (개선점 있다면 개선)
3. 특이사항 없다면 커밋 후 PR 보내기"
  
  echo "$prompt" | jules new > /dev/null
  echo "Spawned Jules session for: $theme"
  
  # Wait 60 seconds to avoid hitting rate limits again
  sleep 60
done

echo "Finished spawning remaining sessions."
