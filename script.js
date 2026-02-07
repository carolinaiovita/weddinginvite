const translations = {
  ro: {
    saveTheDate: "save the date",
    calendarMonth: "AUGUST",
    calDow: "Mie  Joi  Vin  Sâm  Dum  Lun  Mar",
    subtitle: "Ne căsătorim",
    dateTitle: "Data nunții",
    dateBig: "8 august 2026 | Ora 18:00",
    locationTitle: "Locația",
    locationBig: "Sala de nunți „Green Poiana”, satul Puhăceni, raionul Anenii Noi",
    locationView: "Vezi pe hartă",
    inviteTitle: "Vă invităm cu drag",
    inviteParents: "Alături de Părinți",
    inviteText: "Cu emoție și bucurie în suflet, vă invităm să ne fiți alături în ziua în care ne vom uni destinele și vom spune «Da» unei povești scrise din iubire.",
    viewMap: "Vezi pe hartă",
    stepHero: "Despre noi",
    stepDate: "Data",
    stepLocation: "Locație",
    stepInvite: "Invitație",
    giftTitle: "Sugestie de cadou",
    giftText: "Pentru momente care vor fi sărbătorite în timp, un vin ales cu drag va completa amintirile noastre.",
    confirmationTitle: "Confirmarea prezenței",
    formNameLabel: "Nume și Prenume",
    formAttendanceLabel: "Veți veni?",
    formWillCome: "Voi veni",
    formWillNotCome: "Nu voi veni",
    formPartnerLabel: "Veți veni cu partener?",
    formMessageLabel: "Mesaj sau orice altă mențiune",
    formSendButton: "Trimite",
    formSuccessMessage: "Vă mulțumim! Confirmarea a fost trimisă.",
    closingLookForward: "Așteptăm cu drag să vă vedem,",
    closingNames: "Carolina & Dorin",
    closingHearts: "&#10084;&#65039; &#10084;&#65039; &#10084;&#65039;",
    openInvitation: "Ai primit o invitație",
    openButton: "Deschide invitația"
  },
  it: {
    saveTheDate: "save the date",
    calendarMonth: "AGOSTO",
    calDow: "Mer  Gio  Ven  Sab  Dom  Lun  Mar",
    subtitle: "Ci sposiamo",
    dateTitle: "Data del matrimonio",
    dateBig: "8 agosto 2026 | Ore 18:00",
    locationTitle: "Luogo",
    locationBig: "Sala ricevimenti 'Green Poiana', villaggio Puhăceni, distretto di Anenii Noi",
    locationView: "Vedi sulla mappa",
    inviteTitle: "Siete calorosamente invitati",
    inviteParents: "Insieme ai genitori",
    inviteText: "Con emozione e gioia nei nostri cuori, vi invitiamo a unirvi a noi nel giorno in cui uniremo i nostri destini e diremo 'Sì' a una storia scritta con amore.",
    giftText: "Per momenti che saranno celebrati nel tempo, un vino scelto con amore completerà i nostri ricordi.",
    confirmationTitle: "Conferma di presenza",
    formNameLabel: "Nome e Prenome",
    formAttendanceLabel: "Parteciperai?",
    formWillCome: "Parteciperò",
    formWillNotCome: "Non parteciperò",
    formPartnerLabel: "Verrai con un partner?",
    formChildrenLabel: "Bambini",
    formChildrenNote: "Saremmo grati se la giornata potesse essere solo per adulti, così tutti potranno rilassarsi e festeggiare in sicurezza.",
    formMessageLabel: "Messaggio o qualsiasi altra menzione",
    formSendButton: "Invia",
    formSuccessMessage: "Grazie! La tua conferma è stata inviata.",
    closingLookForward: "Non vediamo l'ora di vedervi,",
    closingNames: "Carolina & Dorin",
    closingHearts: "&#10084;&#65039; &#10084;&#65039; &#10084;&#65039;",
    openInvitation: "Hai ricevuto un invito",
    openButton: "Apri l'invito"
  },
  en: {
    saveTheDate: "save the date",
    calendarMonth: "AUGUST",
    calDow: "Wed  Thu  Fri  Sat  Sun  Mon  Tue",
    subtitle: "We are getting married",
    dateTitle: "Wedding Date",
    dateBig: "8 August 2026 | 6:00 PM",
    locationTitle: "Location",
    locationBig: "„Green Poiana” wedding hall, Puhăceni village, Anenii Noi district",
    locationView: "View on map",
    inviteTitle: "You are warmly invited",
    inviteParents: "Together with Parents",
    inviteText: "With emotion and joy in our hearts, we invite you to join us on the day when we will unite our destinies and say «Yes» to a story written out of love.",
    viewMap: "View on map",
    stepHero: "About",
    stepDate: "Date",
    stepLocation: "Location",
    stepInvite: "Invite",
    giftTitle: "Gift Suggestion",
    giftText: "For moments that will be celebrated over time, a wine chosen with love will complete our memories.",
    confirmationTitle: "Presence Confirmation",
    formNameLabel: "First Name and Last Name",
    formAttendanceLabel: "Will you come?",
    formWillCome: "Will come",
    formWillNotCome: "Will not come",
    formPartnerLabel: "Will you come with a partner?",
    formMessageLabel: "Message or any other mention",
    formSendButton: "Send",
    formSuccessMessage: "Thank you! Your confirmation has been sent.",
    closingLookForward: "We look forward to seeing you,",
    closingNames: "Carolina & Dorin",
    closingHearts: "&#10084;&#65039; &#10084;&#65039; &#10084;&#65039;",
    openInvitation: "You've received an invitation",
    openButton: "Open the invitation"
  }
};

function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      if (key === 'closingHearts') {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}

// Update active step based on scroll position
function observeSectionsForStepper() {
  const options = { threshold: 0.5 };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const btn = document.querySelector(`.step[data-target="${id}"]`);
      if (entry.isIntersecting) {
        document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
        if (btn) btn.classList.add('active');
      }
    });
  }, options);

  document.querySelectorAll('.section').forEach(s => observer.observe(s));
}

// Fade on scroll (existing)
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.fade').forEach(section => {
  fadeObserver.observe(section);
});

// Music player logic
const musicBtn = document.getElementById('music-toggle');
const musicAudio = document.getElementById('wedding-music');
const musicIcon = document.getElementById('music-icon');
const musicLabel = document.getElementById('music-label');

if (musicBtn && musicAudio && musicIcon && musicLabel) {
  let playing = false;
  musicBtn.addEventListener('click', () => {
    if (playing) {
      musicAudio.pause();
      musicIcon.innerHTML = '&#119070;'; // musical G clef
      musicLabel.textContent = 'Play';
    } else {
      musicAudio.play();
      musicIcon.innerHTML = '&#10074;&#10074;'; // pause icon
      musicLabel.textContent = 'Pause';
    }
    playing = !playing;
  });
  musicAudio.addEventListener('ended', () => {
    playing = false;
    musicIcon.innerHTML = '&#119070;';
    musicLabel.textContent = 'Play';
  });
}

const form = document.getElementById("contact-form");

form.addEventListener("submit", () => {
  // DO NOT preventDefault – form submits to hidden iframe
  runConfetti();
  setTimeout(() => {
    const parent = form.parentElement;
    form.remove();
    const msg = document.createElement('div');
    msg.className = 'form-success';
    const lang = document.documentElement.lang || 'ro';
    msg.innerText = translations[lang]?.formSuccessMessage || 'Thank you! Your confirmation has been sent.';
    parent.appendChild(msg);
  }, 400);
});

// Attendance radio button styling as buttons
const attendanceRadios = document.querySelectorAll('input[name="attendance"]');
const attendanceLabels = document.querySelectorAll('.form-attendance-btn');
const partnerToggle = document.querySelector('.partner-toggle');
function updateAttendanceButtons() {
  attendanceLabels.forEach(label => {
    const radio = document.getElementById(label.getAttribute('for'));
    if (radio && radio.checked) {
      label.classList.add('selected');
    } else {
      label.classList.remove('selected');
    }
  });
  // Show partner field only if 'yes' is selected
  if (partnerToggle) {
    const yesRadio = document.getElementById('will-come');
    if (yesRadio && yesRadio.checked) {
      partnerToggle.style.display = '';
    } else {
      partnerToggle.style.display = 'none';
    }
  }
}
attendanceRadios.forEach(radio => {
  radio.addEventListener('change', updateAttendanceButtons);
});
updateAttendanceButtons();

// Countdown timer for wedding date (Squarespace style)
function renderCountdownSquares(days, hours, minutes, seconds, lang) {
  const labels = {
    ro: ['Zile', 'Ore', 'Minute', 'Secunde'],
    it: ['Giorni', 'Ore', 'Minuti', 'Secondi'],
    en: ['Days', 'Hours', 'Minutes', 'Seconds']
  };
  const l = labels[lang] || labels['en'];
  return `
    <div class="countdown-square"><span>${days}</span><span class="countdown-label">${l[0]}</span></div>
    <div class="countdown-square"><span>${hours}</span><span class="countdown-label">${l[1]}</span></div>
    <div class="countdown-square"><span>${minutes}</span><span class="countdown-label">${l[2]}</span></div>
    <div class="countdown-square"><span>${seconds}</span><span class="countdown-label">${l[3]}</span></div>
  `;
}
function updateCountdown() {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;
  // Wedding date: 8 August 2026, 18:00
  const weddingDate = new Date(2026, 7, 8, 18, 0, 0); // month is 0-based
  const now = new Date();
  let diff = weddingDate - now;
  if (diff <= 0) {
    countdownEl.innerHTML = '';
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);
  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);
  const seconds = Math.floor(diff / 1000);
  const lang = document.documentElement.lang || 'ro';
  countdownEl.innerHTML = renderCountdownSquares(days, hours, minutes, seconds, lang);
}
setInterval(updateCountdown, 1000);
updateCountdown();
// Update countdown on language change
function onLangChangeUpdateCountdown() { setTimeout(updateCountdown, 50); }
document.querySelectorAll('.lang-switch button').forEach(b => {
  b.addEventListener('click', onLangChangeUpdateCountdown);
});

// ===== Deschide invitația – încărcare frumoasă + petale =====
const invitationCover = document.getElementById('invitation-cover');
const coverOpenBtn = document.getElementById('cover-open-btn');
const petalsContainer = document.getElementById('petals-container');
const petalTypes = ['blossom', 'orange', 'sage'];

function createPetal(isBurst) {
  const p = document.createElement('div');
  p.className = 'petal ' + petalTypes[Math.floor(Math.random() * 3)] + (isBurst ? ' petal-burst' : '');
  p.style.setProperty('--x', Math.random() * 100 + '%');
  p.style.setProperty('--delay', (isBurst ? Math.random() * 8 : Math.random() * 20) + 's');
  p.style.setProperty('--dur', (isBurst ? 14 + Math.random() * 12 : 16 + Math.random() * 14) + 's');
  p.style.setProperty('--r', Math.random() * 360 + 'deg');
  return p;
}

if (invitationCover && coverOpenBtn) {
  coverOpenBtn.addEventListener('click', () => {
    invitationCover.classList.add('opened');
    invitationCover.setAttribute('aria-hidden', 'true');
    document.body.classList.add('invitation-opened');

    // La deschidere: ploaie densă de petale (cad o dată, apoi dispar)
    if (petalsContainer) {
      for (let i = 0; i < 52; i++) {
        const p = createPetal(true);
        p.addEventListener('animationend', () => p.remove());
        petalsContainer.appendChild(p);
      }
      // Petale permanente – mai puține, cad continuu (ca înainte)
      for (let i = 0; i < 18; i++) {
        petalsContainer.appendChild(createPetal(false));
      }
    }
  });
}

// ===== Confetti on RSVP submit =====
function runConfetti() {
  const colors = ['#d4782a', '#e8952e', '#6b7c5e', '#f5f2eb', '#fffef8'];
  const container = document.createElement('div');
  container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;';
  document.body.appendChild(container);
  for (let i = 0; i < 55; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.left = '50%';
    el.style.top = '40%';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    const tx = (Math.random() - 0.5) * 400;
    const ty = (Math.random() - 0.5) * 300 - 100;
    const rot = (Math.random() - 0.5) * 720;
    el.style.setProperty('--tx', tx + 'px');
    el.style.setProperty('--ty', ty + 'px');
    el.style.setProperty('--rot', rot + 'deg');
    container.appendChild(el);
  }
  setTimeout(() => container.remove(), 2600);
}

// ===== 3D tilt on sections (desktop only) =====
if (window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('tilt-enabled');
    section.addEventListener('mousemove', (e) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      section.style.transform = `translateY(0) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    });
    section.addEventListener('mouseleave', () => { section.style.transform = ''; });
  });
}

// Initialize
setLang('ro');
observeSectionsForStepper();

document.querySelectorAll('.lang-switch button').forEach(b => {
  b.addEventListener('click', () => {
    setTimeout(() => setLang(document.documentElement.lang || 'ro'), 10);
  });
});

