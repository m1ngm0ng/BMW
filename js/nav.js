
  // 각 탭 요소를 선택합니다.
  const tab1 = document.querySelector('a[href="#section1"]');
  const tab2 = document.querySelector('a[href="#section2"]');
  const tab3 = document.querySelector('a[href="#section3"]');

  // 각 탭을 클릭했을 때 스크롤 이벤트를 처리하는 함수를 정의합니다.
  function scrollToSection(event) {
    event.preventDefault(); // 링크 클릭 시 페이지 이동을 막습니다.
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' }); // 스크롤 이동을 부드럽게 처리합니다.
  }

  // 각 탭에 클릭 이벤트를 추가합니다.
  tab1.addEventListener('click', scrollToSection);
  tab2.addEventListener('click', scrollToSection);
  tab3.addEventListener('click', scrollToSection);
