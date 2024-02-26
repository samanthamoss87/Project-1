document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(function (item) {
        item.addEventListener('click', function () {
            faqItems.forEach(function (otherItem) {
                if (otherItem !== item) {
                    otherItem.querySelector('.answer').classList.remove('active');
                }
            });
  
            const answer = item.querySelector('.answer');
            answer.classList.toggle('active');
        });
    });
  });