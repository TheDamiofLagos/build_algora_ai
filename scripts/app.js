const state = {
    currentUser: 'learner',
    selectedDate: '',
    selectedTime: '',
    activeLesson: 'formulas',
    userProgress: {
        learner: { tier: 'Pro Lite', sessions: 0, progress: 35 },
        tutor: { tier: 'Tutor', sessions: 12, progress: 100 },
        admin: { tier: 'Admin', sessions: 0, progress: 100 }
    }
};

const dom = {
    navLinks: [],
    pages: [],
    modals: new Map(),
    progressBar: null,
    progressValue: null,
    adminLink: null,
    sessionCount: null,
    remainingSessions: null,
    bookingWrapper: null,
    sessionCard: null,
    timeSlots: null,
    userSelect: null,
    userName: null,
    dashboardName: null,
    tierName: null,
    userTier: null,
    selectedDate: null,
    selectedTime: null,
    currentModuleLabel: null,
    lessonTitle: null,
    lessonSubtitle: null,
    lessonTopic: null,
    lessonSummary: null,
    lessonDuration: null
};

const lessons = {
    introduction: {
        title: 'Excel Fundamentals · Lesson 1',
        subtitle: 'Get confident with layouts, formatting, and navigation.',
        topic: 'Getting Started in Excel',
        summary: 'Lay the groundwork in navigation, formatting, and working with tables.',
        duration: 'Duration · 45 mins'
    },
    formulas: {
        title: 'Excel Fundamentals · Lesson 3',
        subtitle: 'Working with formulas to build confident analysis skills.',
        topic: 'Working with Formulas',
        summary: 'Master the building blocks of Excel to analyse data faster.',
        duration: 'Duration · 15 mins'
    },
    dashboards: {
        title: 'Excel Fundamentals · Lesson 5',
        subtitle: 'Design dashboards that surface insights for stakeholders.',
        topic: 'Dashboards & Insights',
        summary: 'Transform data into polished dashboards, charts, and stories backed by formulas.',
        duration: 'Duration · 30 mins'
    },
    syllabus: {
        title: 'Excel Fundamentals · Syllabus',
        subtitle: 'Preview upcoming modules, projects, and coaching checkpoints.',
        topic: 'Course overview',
        summary: 'Review the curriculum outline, pacing, and milestones to stay on track.',
        duration: 'Duration · 10 mins'
    }
};

function initApp() {
    cacheDom();
    bindEvents();
    showPage('dashboard');
    updateUI();
    highlightActiveModule();
    updateCurrentModuleLabel();
    updateLessonContent(lessons[state.activeLesson]);
}

function cacheDom() {
    dom.navLinks = Array.from(document.querySelectorAll('nav a[data-page]'));
    dom.pages = Array.from(document.querySelectorAll('.page'));
    dom.modals = new Map(Array.from(document.querySelectorAll('.modal')).map(modal => [modal.id, modal]));
    dom.progressBar = document.getElementById('profileProgress');
    dom.progressValue = document.getElementById('progressValue');
    dom.adminLink = document.getElementById('adminLink');
    dom.sessionCount = document.getElementById('sessionCount');
    dom.remainingSessions = document.getElementById('remainingSessions');
    dom.bookingWrapper = document.getElementById('oneOnOneBooking');
    dom.sessionCard = document.getElementById('oneOnOneSession');
    dom.timeSlots = document.getElementById('timeSlots');
    dom.userSelect = document.getElementById('userSelect');
    dom.userName = document.getElementById('userName');
    dom.dashboardName = document.getElementById('dashboardName');
    dom.tierName = document.getElementById('tierName');
    dom.userTier = document.getElementById('userTier');
    dom.selectedDate = document.getElementById('selectedDate');
    dom.selectedTime = document.getElementById('selectedTime');
    dom.currentModuleLabel = document.getElementById('currentModuleLabel');
    dom.lessonTitle = document.getElementById('lessonTitle');
    dom.lessonSubtitle = document.getElementById('lessonSubtitle');
    dom.lessonTopic = document.getElementById('lessonTopic');
    dom.lessonSummary = document.getElementById('lessonSummary');
    dom.lessonDuration = document.getElementById('lessonDuration');
}

function bindEvents() {
    dom.navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetPage = link.dataset.page;
            if (targetPage) {
                showPage(targetPage);
            }
        });
    });

    if (dom.userSelect) {
        dom.userSelect.addEventListener('change', () => {
            state.currentUser = dom.userSelect.value;
            updateUI();
        });
    }

    document.addEventListener('click', handleActionClick);
    document.addEventListener('keydown', handleKeydown);

    dom.modals.forEach(modal => {
        modal.addEventListener('click', event => {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    });
}

function handleActionClick(event) {
    const target = event.target.closest('[data-action]');
    if (!target) {
        return;
    }

    const { action } = target.dataset;

    switch (action) {
        case 'show-page':
            event.preventDefault();
            if (target.dataset.target) {
                showPage(target.dataset.target);
            }
            break;
        case 'open-lesson':
            event.preventDefault();
            openLesson(target.dataset.lesson);
            break;
        case 'join-session':
            event.preventDefault();
            openModal('sessionModal');
            break;
        case 'join-zoom':
            event.preventDefault();
            joinZoom();
            break;
        case 'play-video':
            event.preventDefault();
            playVideo();
            break;
        case 'select-quiz-option':
            event.preventDefault();
            selectQuizOption(target);
            break;
        case 'submit-quiz':
            event.preventDefault();
            submitQuiz();
            break;
        case 'previous-lesson':
            event.preventDefault();
            previousLesson();
            break;
        case 'complete-lesson':
            event.preventDefault();
            completeLesson();
            break;
        case 'book-session':
            event.preventDefault();
            bookSession(target.dataset.date, target);
            break;
        case 'select-time':
            event.preventDefault();
            selectTime(target.dataset.time, target);
            break;
        case 'confirm-booking':
            event.preventDefault();
            confirmBooking();
            break;
        case 'cancel-session':
            event.preventDefault();
            cancelSession();
            break;
        case 'upgrade-plan':
            event.preventDefault();
            upgradePlan();
            break;
        case 'pause-subscription':
            event.preventDefault();
            pauseSubscription();
            break;
        case 'cancel-subscription':
            event.preventDefault();
            cancelSubscription();
            break;
        case 'update-payment':
            event.preventDefault();
            updatePayment();
            break;
        case 'close-modal':
            event.preventDefault();
            if (target.dataset.target) {
                closeModal(target.dataset.target);
            }
            break;
        case 'finalize-booking':
            event.preventDefault();
            finalizeBooking();
            break;
        default:
            break;
    }
}

function handleKeydown(event) {
    if (event.key === 'Escape') {
        const activeModal = Array.from(dom.modals.values()).find(modal => modal.classList.contains('active'));
        if (activeModal) {
            closeModal(activeModal.id);
            return;
        }
    }

    const actionable = event.target.closest('[data-action="open-lesson"]');
    if (!actionable) {
        return;
    }

    const isEnter = event.key === 'Enter';
    const isSpace = event.key === ' ' || event.key === 'Spacebar';

    if (isEnter || isSpace) {
        event.preventDefault();
        openLesson(actionable.dataset.lesson);
    }
}

function showPage(pageId) {
    dom.pages.forEach(page => {
        page.classList.toggle('active', page.id === pageId);
    });

    dom.navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.page === pageId);
    });
}

function openLesson(lessonId = '') {
    const normalized = normalizeLessonId(lessonId);

    if (normalized && normalized !== 'syllabus') {
        state.activeLesson = normalized;
    }

    const contentKey = normalized && lessons[normalized] ? normalized : state.activeLesson;
    updateLessonContent(lessons[contentKey]);
    highlightActiveModule();
    updateCurrentModuleLabel();
    showPage('learning');
}

function selectQuizOption(optionElement) {
    document.querySelectorAll('.quiz-option').forEach(option => option.classList.remove('selected'));
    optionElement.classList.add('selected');
}

function submitQuiz() {
    const selected = document.querySelector('.quiz-option.selected');
    if (selected && selected.textContent.includes('=')) {
        alert('Correct! Well done.');
    } else {
        alert('Not quite right. The correct answer is B) =');
    }
}

function playVideo() {
    alert('Video would play here in the actual implementation.');
}

function completeLesson() {
    alert('Lesson completed! Moving to next lesson.');
    const user = state.userProgress[state.currentUser];
    user.progress = Math.min(user.progress + 5, 100);
    showPage('dashboard');
    updateUI();
}

function previousLesson() {
    alert('Going to previous lesson.');
}

function joinZoom() {
    alert('Joining Zoom session... (This would open Zoom in the live product)');
}

function bookSession(dateLabel, dayElement) {
    if (!dateLabel || !dom.timeSlots) {
        return;
    }

    state.selectedDate = dateLabel;
    state.selectedTime = '';

    document.querySelectorAll('.calendar-day.available').forEach(day => day.classList.remove('selected'));
    dayElement.classList.add('selected');

    dom.timeSlots.style.display = 'block';

    dom.timeSlots.querySelectorAll('button[data-action="select-time"]').forEach(button => {
        button.classList.remove('btn');
        button.classList.add('btn-secondary');
    });
}

function selectTime(timeLabel, buttonElement) {
    if (!timeLabel || !dom.timeSlots) {
        return;
    }

    dom.timeSlots.querySelectorAll('button[data-action="select-time"]').forEach(button => {
        button.classList.remove('btn');
        button.classList.add('btn-secondary');
    });

    buttonElement.classList.remove('btn-secondary');
    buttonElement.classList.add('btn');

    state.selectedTime = timeLabel;
}

function confirmBooking() {
    if (!state.selectedDate || !state.selectedTime) {
        alert('Please select a date and time.');
        return;
    }

    if (dom.selectedDate) {
        dom.selectedDate.textContent = state.selectedDate;
    }
    if (dom.selectedTime) {
        dom.selectedTime.textContent = state.selectedTime;
    }

    openModal('bookingModal');
}

function finalizeBooking() {
    const user = state.userProgress[state.currentUser];

    if (user.tier === 'Basic') {
        alert('Please upgrade your subscription to book 1:1 sessions.');
        return;
    }

    const maxSessions = user.tier === 'Pro Lite' ? 1 : 4;
    if (user.sessions >= maxSessions) {
        alert('You have reached your session limit for this month.');
        return;
    }

    user.sessions += 1;
    updateUI();
    closeModal('bookingModal');
    alert('Session booked successfully!');
}

function cancelSession() {
    if (confirm('Are you sure you want to cancel this session?')) {
        const user = state.userProgress[state.currentUser];
        user.sessions = Math.max(user.sessions - 1, 0);
        updateUI();
        alert('Session cancelled successfully.');
    }
}

function upgradePlan() {
    if (confirm('Upgrade to Pro Plus for ₦18,000/month?')) {
        const user = state.userProgress[state.currentUser];
        user.tier = 'Pro Plus';
        updateUI();
        alert('Upgraded to Pro Plus successfully!');
    }
}

function pauseSubscription() {
    if (confirm('Pause your subscription? You will lose access to content.')) {
        alert('Subscription paused. You can resume anytime.');
    }
}

function cancelSubscription() {
    if (confirm('Are you sure you want to cancel your subscription?')) {
        alert('Subscription cancelled. Sorry to see you go!');
    }
}

function updatePayment() {
    alert('Payment method update would be handled by Paystack/Stripe.');
}

function openModal(modalId) {
    const modal = dom.modals.get(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = dom.modals.get(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

function normalizeLessonId(id) {
    if (!id) {
        return '';
    }

    if (id === 'excel-formulas') {
        return 'formulas';
    }

    return id;
}

function highlightActiveModule() {
    document.querySelectorAll('.module-card[data-lesson]').forEach(card => {
        card.classList.toggle('active-module', card.dataset.lesson === state.activeLesson);
    });
}

function updateCurrentModuleLabel() {
    if (!dom.currentModuleLabel) {
        return;
    }

    const activeCard = document.querySelector(`.module-card[data-lesson="${state.activeLesson}"]`);
    const label = activeCard?.dataset.lessonTitle || activeCard?.querySelector('h3')?.textContent;

    if (label) {
        dom.currentModuleLabel.textContent = label;
    }
}

function updateLessonContent(content) {
    if (!content) {
        return;
    }

    if (dom.lessonTitle) {
        dom.lessonTitle.textContent = content.title;
    }
    if (dom.lessonSubtitle) {
        dom.lessonSubtitle.textContent = content.subtitle;
    }
    if (dom.lessonTopic) {
        dom.lessonTopic.textContent = content.topic;
    }
    if (dom.lessonSummary) {
        dom.lessonSummary.textContent = content.summary;
    }
    if (dom.lessonDuration) {
        dom.lessonDuration.textContent = content.duration;
    }
}

function updateUI() {
    const user = state.userProgress[state.currentUser];
    const userName = state.currentUser === 'learner' ? 'Tola' : state.currentUser === 'tutor' ? 'Tunji' : 'Admin';

    if (dom.userName) {
        dom.userName.textContent = userName;
    }
    if (dom.dashboardName) {
        dom.dashboardName.textContent = userName;
    }
    if (dom.userTier) {
        dom.userTier.textContent = user.tier;
    }
    if (dom.tierName) {
        dom.tierName.textContent = user.tier;
    }

    if (dom.progressBar) {
        dom.progressBar.style.width = `${Math.min(user.progress, 100)}%`;
    }
    if (dom.progressValue) {
        dom.progressValue.textContent = `${Math.min(user.progress, 100)}% complete`;
    }

    if (dom.adminLink) {
        dom.adminLink.style.display = state.currentUser === 'admin' ? 'block' : 'none';
    }

    if (dom.sessionCount) {
        if (user.tier === 'Pro Lite') {
            dom.sessionCount.textContent = `${Math.max(1 - user.sessions, 0)} one-on-one session remaining`;
        } else if (user.tier === 'Pro Plus') {
            dom.sessionCount.textContent = `${Math.max(4 - user.sessions, 0)} one-on-one sessions remaining`;
        } else {
            dom.sessionCount.textContent = 'Upgrade to access 1:1 sessions';
        }
    }

    if (dom.remainingSessions) {
        if (user.tier === 'Pro Lite') {
            dom.remainingSessions.textContent = Math.max(1 - user.sessions, 0);
        } else if (user.tier === 'Pro Plus') {
            dom.remainingSessions.textContent = Math.max(4 - user.sessions, 0);
        } else {
            dom.remainingSessions.textContent = 0;
        }
    }

    if (dom.bookingWrapper) {
        dom.bookingWrapper.style.display = user.tier !== 'Basic' ? 'block' : 'none';
    }
    if (dom.sessionCard) {
        dom.sessionCard.style.display = user.tier !== 'Basic' ? 'flex' : 'none';
    }

    highlightActiveModule();
    updateCurrentModuleLabel();
}

document.addEventListener('DOMContentLoaded', initApp);
