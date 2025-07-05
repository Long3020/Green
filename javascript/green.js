document.addEventListener('DOMContentLoaded', function () {
  const closeBtn = document.getElementById('close-btn');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const overlay = document.getElementById('mobile-overlay');
  const menu = document.getElementById("mobile-menu-sidebar");

  function openMenu() {
    hamburgerBtn.classList.add('d-none');
    closeBtn.classList.remove('d-none');

    overlay.classList.remove('d-none');
    overlay.classList.remove('close');
    setTimeout(() => {
      overlay.classList.add('open');
    }, 20);

    menu.classList.remove('d-none');
    menu.classList.remove('close');
    setTimeout(() => {
      menu.classList.add('open');
    }, 20);
  }

    function closeMenu() {
      hamburgerBtn.classList.remove('d-none');
      closeBtn.classList.add('d-none');

      overlay.classList.remove('open');
      setTimeout(() => {
        overlay.classList.add('close');
      }, 20);
      setTimeout(() => {
        overlay.classList.add('d-none');
      }, 520);

      menu.classList.remove('open');
      setTimeout(() => {
        menu.classList.add('close');
      }, 20);
      setTimeout(() => {
        menu.classList.add('d-none');
      }, 520);
    }

    hamburgerBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
});

document.addEventListener('DOMContentLoaded', function () {
  const searchBtn = document.getElementById('search-btn');
  const searchBox = document.getElementById('search-box');

  function openSearchBox() {
    searchBox.classList.remove('close');
    setTimeout(() => {
      searchBox.classList.add('open');
    }, 20);
  }

  function closeSearchBox() {
    searchBox.classList.remove('open');
    setTimeout(() => {
      searchBox.classList.add('close');
    }, 20);
  }

  searchBtn.addEventListener('click', function () {
    if (searchBox.classList.contains('open')) {
      closeSearchBox();
    } else {
      openSearchBox();
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const mobileSearchBtn = document.getElementById('mobile-search-btn');
  const mobileSearchBox = document.getElementById('mobile-search-box');

  function openSearchBox() {
    mobileSearchBox.classList.remove('close');
    setTimeout(() => {
      mobileSearchBox.classList.add('open');
    }, 20);
  }

  function closeSearchBox() {
    mobileSearchBox.classList.remove('open');
    setTimeout(() => {
      mobileSearchBox.classList.add('close');
    }, 20);
  }

  mobileSearchBtn.addEventListener('click', function () {
    if (mobileSearchBox.classList.contains('open')) {
      closeSearchBox();
    } else {
      openSearchBox();
    }
  });
});

$('#banner .slides').slick({
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false
      }
    }
  ]
});

$('#intro .slides').slick({
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});

window.addEventListener('load', () => {
  const slides = document.querySelectorAll('#section-intro .slide');
  if (!slides.length) return;

  let maxHeight = 0;
  slides.forEach(slide => {
    const height = slide.offsetHeight;
    if (height > maxHeight) maxHeight = height;
  });

  slides.forEach(slide => {
    slide.style.minHeight = `${maxHeight}px`;
  });
});

const $solutionSlider = $('#section-solution .slides');

$solutionSlider.slick({
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,   
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 992,
      settings: {
          slidesToShow: 3
      }
    },

    {
      breakpoint: 576,
      settings: {
          slidesToShow: 1
      }
    }
  ]
});

$('#section-solution .prev-slide').click(() => {
    $solutionSlider.slick('slickPrev');
});
$('#section-solution .next-slide').click(() => {
    $solutionSlider.slick('slickNext');
});

const navItems = document.querySelectorAll('.nav-item');
const productCards = document.querySelectorAll('.product-card');
const noProductsWrapper = document.querySelector('#no-products')?.parentElement;

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const category = item.getAttribute('data-category');

    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    let visibleCount = 0;

    productCards.forEach(card => {
      const col = card.closest('.col');
      if (!col) return;

      if (category === 'all' || card.classList.contains(category)) {
        col.classList.remove('d-none');
        visibleCount++;
      } else {
        col.classList.add('d-none');
      }
    });

    if (noProductsWrapper) {
      if (visibleCount === 0) {
        noProductsWrapper.classList.remove('d-none');
      } else {
        noProductsWrapper.classList.add('d-none');
      }
    }
  });
});
document.querySelector('.nav-item[data-category="all"]')?.click();

const $priceSlider = $('#section-price .slides');

$priceSlider.slick({
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,   
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 992,
      settings: {
          slidesToShow: 2,
          centerMode: false
      }
    },
    {
      breakpoint: 768,
      settings: {
          slidesToShow: 1,
      }
    }
  ]
});

$('#section-price .prev-slide').click(() => {
    $priceSlider.slick('slickPrev');
});
$('#section-price .next-slide').click(() => {
    $priceSlider.slick('slickNext');
});

$('#section-feedback .slides').slick({
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
      }
    }
  ]
});

function setEqualFeedbackHeight() {
  const items = document.querySelectorAll('.feedback-content');
  let maxHeight = 0;

  items.forEach(item => {
    item.style.minHeight = 'auto';
    const height = item.offsetHeight;
    if (height > maxHeight) maxHeight = height;
  });

  items.forEach(item => {
    item.style.minHeight = `${maxHeight}px`;
  });
}

window.addEventListener('load', setEqualFeedbackHeight);
window.addEventListener('resize', setEqualFeedbackHeight);

$(document).on('setPosition', function () {
  setEqualFeedbackHeight();
});

function syncAnswerHeight() {
  const question = document.getElementById('question');
  const answer = document.getElementById('answer');
  const answerBoxes = document.querySelectorAll('#answer .answer-wrapper');

  if (question && answer) {
    const questionHeight = question.offsetHeight;
    answer.style.maxHeight = questionHeight + 'px';

    answerBoxes.forEach(answerBox => {
        answerBox.style.maxHeight = questionHeight + 'px';
    });
  }
}

window.addEventListener('load', syncAnswerHeight);
window.addEventListener('resize', syncAnswerHeight);

document.addEventListener('DOMContentLoaded', function () {
  const collapseIcons = document.querySelectorAll('.collapse-icon');

  collapseIcons.forEach(icon => {
    icon.addEventListener('click', function () {
      const iconId = this.id;
      const match = iconId.match(/collapse-icon-(\d+)/);
      if (!match) return;

      const questionNum = match[1];
      const miniQuestions = document.querySelectorAll(`.mini-question.question-${questionNum}`);

      miniQuestions.forEach(q => {
        q.classList.toggle('d-none');
      });

      const iconInner = this.querySelector('i');
      if (iconInner) {
        iconInner.classList.toggle('rotated');
      }
      syncAnswerHeight()
    });
  });

    const firstIcon = document.getElementById('collapse-icon-1');
    if (firstIcon) {
        firstIcon.click();
    }
});

document.addEventListener('DOMContentLoaded', function () {
  const miniQuestions = document.querySelectorAll('.mini-question');
  const allAnswers = document.querySelectorAll('#answer .answer');

  miniQuestions.forEach(mini => {
    mini.addEventListener('click', function () {
      const category = this.dataset.category;

      allAnswers.forEach(ans => ans.classList.add('d-none'));

      const targetAnswer = document.querySelector(`#answer .answer.${category}`);
      if (targetAnswer) {
        targetAnswer.classList.remove('d-none');
      }

      miniQuestions.forEach(q => q.classList.remove('active'));

      this.classList.add('active');
    });
  });

    const firstQuestion = document.getElementById('first-click-question');
    if (firstQuestion) {
      firstQuestion.click();
    }
});

document.addEventListener('DOMContentLoaded', function () {
  const pictureTitle = document.getElementById('picture-title');
  const footerLogos = document.querySelectorAll('.footer-logo');

  if ('IntersectionObserver' in window && pictureTitle) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            pictureTitle.classList.add('show');
            footerLogos.forEach(logo => logo.classList.add('show'));
          } else {
            pictureTitle.classList.remove('show');
            footerLogos.forEach(logo => logo.classList.remove('show'));
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    observer.observe(pictureTitle);
  }
});

function showNotify(type) {
  const notify = document.createElement("div");
  notify.className = `notify notify-${type} row m-0 g-0`;
  notify.style.display = "flex";

  const progress = document.createElement("div");
  progress.className = "notify-progress";

  const iconWrapper = document.createElement("div");
  iconWrapper.className = "notify-icon col-auto me-3";
  const icon = document.createElement("i");
  icon.className =
    type === "success" || type === "contact"
        ? "fas fa-check"
        : "fas fa-triangle-exclamation";
  iconWrapper.appendChild(icon);

  const textWrapper = document.createElement("div");
  textWrapper.className = "col-auto";

  const title = document.createElement("div");
  title.className = "notify-1";
  title.textContent =
    type === "success"
        ? "Liên hệ thành công"
        : type === "contact"
            ? "Gửi liên hệ thành công"
            : "Liên hệ không thành công";

  const subtitle = document.createElement("div");
  subtitle.className = "notify-2";
  subtitle.textContent =
    type === "success"
        ? "Đăng ký thành công!"
        : type === "contact"
            ? "Chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể."
            : "Email đã tồn tại trong hệ thống!";

  textWrapper.appendChild(title);
  textWrapper.appendChild(subtitle);

  const closeIcon = document.createElement("div");
  closeIcon.className = "col-auto ms-3";
  closeIcon.innerHTML = "&times;";
  closeIcon.style.cursor = "pointer";

  notify.appendChild(progress);
  notify.appendChild(iconWrapper);
  notify.appendChild(textWrapper);
  notify.appendChild(closeIcon);

  document.body.appendChild(notify);

  requestAnimationFrame(() => {
      notify.classList.add("show");
  });

  const closeNotify = () => {
      notify.classList.remove("show");
      setTimeout(() => notify.remove(), 500);
  };

  closeIcon.addEventListener("click", closeNotify);
  setTimeout(closeNotify, 3000);
}

function handleEmailSubmit(event) {
  event.preventDefault();

  const emailInput = event.target.querySelector('input[type="email"]');
  const email = emailInput.value.trim().toLowerCase();

  const emailList = JSON.parse(localStorage.getItem("email_list")) || [];

  if (emailList.includes(email)) {
    showNotify("error");
  } else {
    emailList.push(email);
    localStorage.setItem("email_list", JSON.stringify(emailList));
    showNotify("success");
  }

  event.target.reset();
}

function createContactPopup() {
  const popupId = 'contactPopup';

  if (!document.getElementById(popupId)) {
    const popupHTML = `
      <div id="${popupId}" class="contact-popup-overlay" style="display: none;">
        <div class="contact-popup">
          <div class="close-popup">&times;</div>
          <form id="contactForm">
            <div class="form-row mt-4">
              <div class="input-group">
                <input type="text" id="name" placeholder=" " required />
                <label for="name">Họ và tên</label>
              </div>
              <div class="input-group">
                <input type="tel" id="phone" placeholder=" " required />
                <label for="phone">Số điện thoại</label>
              </div>
            </div>
            <div class="form-row">
              <div class="input-group">
                <input type="email" id="mail" placeholder=" " required />
                <label for="mail">Email của bạn</label>
              </div>
              <div class="input-group">
                <input type="text" id="address" placeholder=" " required />
                <label for="address">Địa chỉ của bạn</label>
              </div>
            </div>
            <div class="input-group">
              <textarea id="message" placeholder=" "></textarea>
              <label for="message">Ghi chú, lời nhắn</label>
            </div>
            <button type="submit"><i class="fas fa-check"></i> GỬI YÊU CẦU</button>
          </form>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHTML);
  }

  const popup = document.getElementById(popupId);
  popup.style.display = 'flex';
  requestAnimationFrame(() => {
    popup.classList.add('visible');
  });

  const closePopup = () => {
    popup.classList.remove('visible');
    popup.addEventListener('transitionend', function handler(e) {
      if (e.propertyName === 'opacity') {
        popup.style.display = 'none';
        popup.removeEventListener('transitionend', handler);
      }
    });
  };

  popup.querySelector('.close-popup').onclick = closePopup;
  window.addEventListener('click', function (e) {
    if (e.target === popup) {
      closePopup();
    }
  });

  const form = popup.querySelector('#contactForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const userInfo = {
      name: document.getElementById('name').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      email: document.getElementById('mail').value.trim(),
      address: document.getElementById('address').value.trim(),
      message: document.getElementById('message').value.trim(),
      timestamp: new Date().toISOString()
    };

    localStorage.setItem('userContactInfo', JSON.stringify(userInfo));
    console.log('Dữ liệu đã lưu vào localStorage:', JSON.parse(localStorage.getItem('userContactInfo')));

    form.reset();
    closePopup();

    showNotify("contact");

  });
}

document.querySelectorAll('.contact-now').forEach(btn => {
  btn.addEventListener('click', createContactPopup);
});

const btnScroll = document.getElementById('btn-scroll');

window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY / document.body.scrollHeight) * 100;
  btnScroll.classList.toggle('show', scrollPercent > 10);
});

btnScroll.addEventListener('click', (event) => {
  event.preventDefault();

  $('html, body').animate(
    { scrollTop: 0 },
    500,
    'swing'
  );
});

