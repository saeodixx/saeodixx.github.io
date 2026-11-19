# Portfolio

다크 모던 스타일의 개발자 포트폴리오 사이트입니다. 빌드 도구 없이 HTML/CSS/JS만으로 동작합니다.

## 내용 수정

`data.js` 하나만 고치면 됩니다 — 이름, 소개, 기술 스택, 프로젝트, 경력, 링크.
프로필 사진은 `assets/profile.jpg`를 교체하세요.

## GitHub Pages에 올리기

1. GitHub에서 새 저장소를 만듭니다. 이름을 **`<내아이디>.github.io`** 로 하면 주소가 `https://<내아이디>.github.io` 가 됩니다.
2. 이 폴더에서:
   ```bash
   git init
   git add .
   git commit -m "first portfolio"
   git branch -M main
   git remote add origin https://github.com/<내아이디>/<내아이디>.github.io.git
   git push -u origin main
   ```
3. 저장소 **Settings → Pages → Source: Deploy from a branch → main / (root)** 선택 후 저장.
4. 1~2분 뒤 `https://<내아이디>.github.io` 에서 확인.

## 로컬에서 미리보기

`index.html`을 브라우저로 바로 열면 됩니다.
