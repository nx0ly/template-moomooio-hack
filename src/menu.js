/*
    Author: RaZoshi
    Version: 1
    Github: https://github.com/RaZoshi
    Donate: https: //dalink.to/razoshenka
    Discord: https://discord.gg/7VQMpBHRD8
*/

const PRESET_COLORS = [
    "#9696FF", "#ffffff", "#d9d9d9", "#bfbfbf", "#808080", "#404040", "#202020", "#000000",
    "#ffadad", "#ff5252", "#ff0000", "#a60000", "#ff8c5a", "#ffb300", "#ffdd00",
    "#ffff99", "#e3ca52", "#ccff00", "#8ecc51", "#a4cc4f", "#00ff00", "#008000",
    "#ccf2ff", "#51ccb3", "#00ffff", "#51bacc", "#0099ff", "#0000ff", "#000080",
    "#e0ccff", "#8e51cc", "#b451cc", "#9900ff", "#cc51c9", "#ff00ff", "#ff0080",
    "#51cc87", "#516bcc", "#3d3f5c", "#2d2f3c", "#16171e", "#795548", "#5d4037"
];

const log = console.log;
const debug = console.debug;
const table = console.table;
const getEl = (id) => document.getElementById(id);
const kebabToCamel = (str) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
const TRANSLATIONS = {
    en: {
        "auto-upgrade": "Automatically upgrading to selected items",
        "auto-respawn": "Respawning after death",
        "auto-buy": "Automatically buying hats",
        "auto-chat": "Spam chat automatically",
        "kill-chat": "Sending message on kill player",
        "item-macros": "Keybinds for quick item placement",
        "hat-macros": "Keybinds for quick hat equipment",
        "packet-limiter": "Limits packets per second to avoid kick",
        "slow-packets": "Delays outgoing packets (Fake Lag)",
        "auto-bed": "Placing bed after took it in upgrade bar",
        "auto-push": "Pushes enemy to spike",
        "hood-bypass": "You can see invisible players",
        "hat-reload-bar": "Shows reloading hat delay",
        "smooth-zoom": "Zooming in/out on mouse wheel",
        "tracers": "Drawing lines to entity",
        "fog": "Atmospheric animated fog",
        "shadows": "Advanced shadow effects for objects",
        "healing-effect": "Showing healing effect on heal",
        "spinning-objects": "Rotating objects",
        "health-bar": "Changing health bar styles",
        "colored-health-bar": "Custom colors for health bars",
        "auto-heal": "Automatically healing player",
        "auto-break": "Automatically breaking trap",
        "auto-place": "Placing objects near enemy",
        "auto-insta": "Automatically instaing enemy",
        "anti-trap": "Placing object around trap",
        "spike-sync": "Automatically syncing musket",
        "notifications": "A just notifications",
        "client-style": "Styles client & language",
        "markers": "Item Markers",
        "hide-settings-on-close": "Hide settings panels when menu is closed",
        "box-esp": "Box ESP",
        "arrows": "Arrows",
        "trails": "Trails",
        "prediction-line": "Prediction Line"
    },
    ru: {
        "auto-upgrade": "Автоматическое улучшение предметов",
        "auto-respawn": "Возрождение после смерти",
        "auto-buy": "Автоматическая покупка шапок",
        "auto-chat": "Автоматический спам в чат",
        "kill-chat": "Отправляет сообщение при убийстве игрока",
        "item-macros": "Бинд клавиш для предметов",
        "hat-macros": "Бинд клавиш для шапок",
        "hat-reload-bar": "Показывает перезарядку шапки",
        "packet-limiter": "Ограничение пакетов от кика",
        "slow-packets": "Задержка пакетов (Фейк Лаг)",
        "auto-bed": "Ставит кровать при прокачке",
        "auto-push": "Толкает врага на шипы",
        "hood-bypass": "Видно невидимых игроков",
        "smooth-zoom": "Зум колесиком мыши",
        "shadows": "Продвинутые тени для объектов",
        "tracers": "Линии к игрокам",
        "fog": "Атмосферный туман",
        "healing-effect": "Показывает эффект при лечении",
        "spinning-objects": "Вращение построек",
        "health-bar": "Стиль полоски здоровья",
        "colored-health-bar": "Пользовательские цвета для полосок здоровья",
        "auto-heal": "Автоматическое лечение",
        "auto-break": "Автоматическое ломание трэпов",
        "auto-place": "Ставит блоки рядом с врагом",
        "auto-insta": "Автоматическое убийство (Инста)",
        "anti-trap": "Ставит блоки вокруг ловушки",
        "spike-sync": "Синхронизация мушкета",
        "notifications": "Показывать уведомления",
        "client-style": "Внешний вид и язык меню",
        "markers": "Маркеры объектов",
        "hide-settings-on-close": "Скрывать панели настроек при закрытии меню",
        "box-esp": "ESP Коробка",
        "arrows": "Стрелки",
        "trails": "Следы движения",
        "prediction-line": "Линия предсказания"
    },
    ua: {
        "auto-upgrade": "Автоматичне покращення предметів",
        "auto-respawn": "Відродження після смерті",
        "auto-buy": "Автоматична купівля шапок",
        "auto-chat": "Автоматичний спам у чат",
        "kill-chat": "Надсилає повідомлення при вбивстві гравця",
        "item-macros": "Бінд клавіш для предметів",
        "hat-macros": "Бінд клавіш для шапок",
        "hat-reload-bar": "Показує перезарядку шапки",
        "packet-limiter": "Обмеження пакетів від кіку",
        "slow-packets": "Затримка пакетів (Фейк Лаг)",
        "auto-bed": "Ставить ліжко при прокачуванні",
        "auto-push": "Штовхає ворога на шипи",
        "hood-bypass": "Видно невидимих гравців",
        "smooth-zoom": "Зум коліщатком миші",
        "shadows": "Просунуті тіні для об'єктів",
        "tracers": "Лінії до гравців",
        "fog": "Атмосферний туман",
        "healing-effect": "Показує ефект при лікуванні",
        "spinning-objects": "Обертання будівель",
        "health-bar": "Стиль смужки здоров'я",
        "colored-health-bar": "Користувацькі кольори для смужок здоров'я",
        "auto-heal": "Автоматичне лікування",
        "auto-break": "Автоматичне ламання пасток",
        "auto-place": "Ставить блоки поруч з ворогом",
        "auto-insta": "Автоматичне вбивство (Інста)",
        "anti-trap": "Ставить блоки навколо пастки",
        "spike-sync": "Синхронізація мушкета",
        "notifications": "Показувати сповіщення",
        "client-style": "Зовнішній вигляд та мова меню",
        "markers": "Маркери об'єктів",
        "hide-settings-on-close": "Приховувати панелі налаштувань при закритті меню",
        "box-esp": "ESP Коробка",
        "arrows": "Стрілки",
        "trails": "Сліди руху",
        "prediction-line": "Лінія передбачення"
    }
};

window.settings = {};

const defaultSettings = {
    "auto-heal": false,
    "auto-heal-speed": 110,
    "auto-heal-type": "Single",

    "auto-upgrade": false,
    "auto-upgrade-type": "Katana Hammer",

    "blood-particles": false,
    "blood-color": "#ff0000",
    "blood-count": 10,
    "blood-size": 4,
    "blood-speed": 2,

    "motion-blur": false,
    "blur-intensity": 4,

    "dark-mode": false,

    "fog-animated": true,
    "fog-pulse-speed": 0.02,

    "auto-retrap": false,
    "auto-replace": false,
    "auto-replace-targets": ["Trap", "Spike"],
    "auto-replace-dist": 200,

    "auto-respawn": false,
    "auto-buy": false,
    "auto-accept": false,
    "auto-bed": false,

    "cheat-detector": false,
    "detect-targets": ["Simple Macro", "Fast Heal", "Auto Hats", "Auto Break", "Auto Heal"],
    "notify-method": "Notification",

    "auto-mills": false,
    "auto-scythe": false,
    "anti-wolf": false,
    "anti-wolf-dist": 200,

    "auto-attack": false,
    "auto-attack-mode": "Invisible",

    "auto-hats": false,

    "auto-hats-combat-switch": true,
    "auto-hats-combat": "Immunity Gear",
    "auto-hats-range": 700,

    "auto-hats-river-switch": true,
    "auto-hats-river": "Scuba Gear",

    "auto-hats-winter-switch": true,
    "auto-hats-winter": "Winter Hat",

    "auto-hats-desert-switch": true,
    "auto-hats-desert": "Booster Hat",

    "auto-hats-default": "Booster Hat",

    "auto-break": false,
    "auto-break-targets": ["Trap", "Spike"],
    "auto-break-priority": "Trap",
    "auto-break-equip-hat": true,
    "auto-break-hat": "Demolist",

    "auto-place": false,
    "auto-place-priority": "Any Angle",
    "auto-place-distance": 140,

    "auto-push": false,
    "auto-push-line": false,
    "auto-push-line-color": "#303030",
    "stop-on-shift": false,

    "avoid-objects": false,
    "avoid-targets": ["Spikes", "Traps"],
    "avoid-mode": "Full Stop",
    "avoid-distance": 100,

    "spike-sync": false,
    "spike-sync-visualizer": false,
    "spike-sync-color": "#cc5151",
    "spike-sync-range": 400,
    "spike-sync-attack-range": 120,

    "anti-trap": false,
    "anti-trap-type": "traps",

    "pre-place": true,
    "pre-place-visual": true,
    "pre-place-color": "#f678a7",

    "teammate-follow": false,
    "teammate-follow-type": "Nearest",
    "teammate-follow-id": "999",
    "teammate-follow-dist": 550,

    "auto-chat": false,
    "auto-chat-delay": 3000,
    "auto-chat-text": "packet v1 on top",

    "kill-chat": false,
    "kill-chat-text": "ez gg",

    "notifications": false,

    "discord-rpc": false,
    "discord-token": "",
    "discord-rpc-time": false,

    "smooth-zoom": false,
    "smooth-direction": false,
    "hood-bypass": false,
    "watermark": false,
    "watermark-style": "Jello",
    "fps-display": false, "fps-style": "Jello", "fps-x": 20, "fps-y": 70,
    "ping-display": false, "ping-style": "Jello", "ping-x": 20, "ping-y": 110,
    "cps-display": false, "cps-style": "Jello", "cps-x": 20, "cps-y": 150,
    "packets-display": false, "packets-x": 20, "packets-y": 190, "packets-style": "Jello",
    "hide-grids": false,
    "angle-searcher": false,

    "fog": false,
    "fog-dist": 35,
    "fog-opacity": 80,
    "fog-color": "#16171e",
    "shadows": false,
    "shadows-color": "#000",
    "shadows-blur": 8,

    "hat-reload-bar": false,
    "hat-reload-bar-color": "#9696FF",
    "hat-reload-bar-smooth": true,
    "colored-health-bar": false,
    "selfteam-health-bar-color": "#9696FF",
    "enemyanimal-health-bar-color": "#cc5151",
    "building-health": false,
    "building-health-mode": "Rectangle",
    "building-health-smooth": true,

    "healing-effect": false,
    "cookie-size": 60,
    "cookie-count": 3,
    "cookie-mode": "circle",
    "cookie-speed": 1.0,
    "cookie-lifetime": 3.0,

    "tracers": false,
    "tracers-width": 2,
    "tracers-style": "Default",
    "enemy-tracers": false,
    "enemy-tracers-color": "#cc5151",
    "animal-tracers": false,
    "animal-tracers-color": "#888888",
    "teammate-tracers": false,
    "teammate-tracers-color": "#a4cc4f",

    "markers": false,
    "markers-outline": false,
    "markers-outline-color": "#303030",
    "markers-owner-id": false,
    "enemy-markers": false,
    "enemy-markers-color": "#cc5151",
    "teammate-markers": false,
    "teammate-markers-color": "#51ccb3",
    "self-markers": false,
    "self-markers-color": "#a4cc4f",

    "arrows": false,
    "arrows-pulse": false,
    "arrows-size": 15,
    "arrows-style": "Triangle",
    "arrows-glow": false,
    "arrows-enemy": false,
    "arrows-enemy-color": "#cc5151",
    "arrows-animal": false,
    "arrows-animal-color": "#888888",
    "arrows-teammate": false,
    "arrows-teammate-color": "#a4cc4f",

    "box-esp": false,
    "box-esp-width": 100,
    "box-esp-height": 100,
    "box-esp-style": "Default",
    "box-esp-outline": false,
    "box-esp-outline-color": "#000000",
    "box-esp-enemy": false,
    "box-esp-enemy-color": "#cc5151",
    "client-actions": false,
    "box-esp-teammate": false,
    "box-esp-teammate-color": "#a4cc4f",
    "box-esp-animal": false,
    "box-esp-animal-color": "#888888",

    "trails": false,
    "trails-mode": "Line",
    "trails-history-length": 20,
    "trails-width": 4,
    "trails-self": false,
    "trails-self-color": "#9696FF",
    "trails-teammate": false,
    "trails-teammate-color": "#a4cc4f",
    "trails-enemy": false,
    "trails-enemy-color": "#cc5151",

    "placement-prediction": false,
    "prediction-spike-color": "#63aec4",
    "prediction-trap-color": "#f678a7",
    "prediction-wall-color": "#808080",
    "prediction-windmill-color": "#8ecc51",
    "prediction-food-color": "#ff5252",
    "prediction-turret-color": "#ccbb51",
    "prediction-platform-color": "#ce63c4",

    "weapon-range": false,
    "weapon-range-self": false,
    "weapon-range-self-color": "#f5cb42",
    "weapon-range-enemy": false,
    "weapon-range-enemy-color": "#ff4444",
    "weapon-range-teammate": false,
    "weapon-range-teammate-color": "#8ecc51",

    "collide-box": false,
    "collide-box-color": "#сс5151",

    "item-macros": false,
    "spike-key": "KeyV",
    "trap-boost-key": "KeyF",
    "turret-key": "KeyH",
    "food-key": "KeyQ",
    "wall-key": "KeyU",
    "platform-key": "KeyJ",
    "windmill-key": "KeyN",

    "hat-macros": false,
    "bush-hat-key": "NONE",
    "berserker-gear-key": "KeyG",
    "jungle-gear-key": "NONE",
    "crystal-gear-key": "NONE",
    "spike-gear-key": "NONE",
    "immunity-gear-key": "KeyC",
    "boost-hat-key": "KeyM",
    "apple-hat-key": "NONE",
    "scuba-gear-key": "NONE",
    "hood-key": "KeyL",
    "demolist-key": "KeyZ",
    "winter-hat-key": "NONE",
    "pumpkings-curse-key": "NONE",

    "packet-limiter": false,
    "packet-limit": 120,
    "slow-packets": false,
    "slow-packets-delay": 100,

    "menu-language": "en",
    "client-style": true,
    "client-color": "#9696FF",
    "module-columns": 2,
    "modules-sort": "None",
    "border-radius": 12,
    "hide-settings-on-close": false,
    "array-list": false,

    "profile-avatar": "https://i.postimg.cc/85F9WLbX/aSdelaj-fon-posvetlee-(1).jpg",
    "profile-bg": "",
    "profile-name": "Developer",
    "profile-status": "Version 2.7",
};

Object.keys(defaultSettings).forEach(key => {
    window.settings[kebabToCamel(key)] = defaultSettings[key];
});

const ColorUtils = {
    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 255, g: 255, b: 255 };
    },
    rgbToHex(r, g, b) {
        return "#" + [r, g, b].map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
    },
    getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }
};

const SettingsStorage = {
    data: {},
    init() {
        try {
            this.data = JSON.parse(localStorage.getItem("packet-settings")) || JSON.parse(localStorage.getItem("relake-settings")) || {};
            Object.keys(defaultSettings).forEach(key => {
                if (this.data[key] === undefined) this.data[key] = defaultSettings[key];
                window.settings[kebabToCamel(key)] = this.data[key];
            });
        } catch (e) {
            this.data = { ...defaultSettings };
        }
    },
    get(key, def) {
        return this.data[key] !== undefined ? this.data[key] : def;
    },
    set(key, val) {
        this.data[key] = val;
        window.settings[kebabToCamel(key)] = val;
        this.save();
        if (["auto-chat", "auto-chat-delay", "auto-chat-text"].includes(key) && window.updateAutoChat) {
            window.updateAutoChat();
        }
    },
    save() {
        try { localStorage.setItem("packet-settings", JSON.stringify(this.data)); } catch (e) { }
    }
};
SettingsStorage.init();

const UI = {
    toggle: (key, name, desc = "", active = false) => ({ type: "toggle", key, name, description: desc, isActive: SettingsStorage.get(key, active) }),
    toggleColor: (key, colorKey, name, desc = "", color = "#ffffff") => ({ type: "toggle-color", key, colorKey, name, description: desc, isActive: SettingsStorage.get(key, false), colorValue: SettingsStorage.get(colorKey, color) }),
    color: (key, name, desc = "", value = "#ffffff") => ({ type: "color", key, name, description: desc, value: SettingsStorage.get(key, value) }),
    select: (key, name, options, desc = "", value = null) => ({ type: "select", key, name, description: desc, options, value: SettingsStorage.get(key, value || options[0]) }),
    slider: (key, name, min, max, desc = "", value = null) => ({ type: "slider", key, name, description: desc, min, max, value: SettingsStorage.get(key, value ?? min) }),
    text: (key, name, desc = "", value = "", maxLength = 30) => ({ type: "text", key, name, description: desc, value: SettingsStorage.get(key, value), maxLength }),
    bind: (key, name, desc = "", value = "NONE") => ({ type: "bind", key, name, description: desc, value: SettingsStorage.get(key, value) }),
    module: (key, name, desc = "", opts = {}) => ({ type: "module", key, name, description: desc, isActive: SettingsStorage.get(key, opts.active || false), settings: opts.settings || [], locked: opts.locked || false }),
    toggleSelect: (toggleKey, selectKey, name, options, desc = "", active = false, value = null) => ({ type: "toggleselect", toggleKey, selectKey, name, description: desc, isActive: SettingsStorage.get(toggleKey, active), options, value: SettingsStorage.get(selectKey, value || options[0]) }),
    multiSelect: (key, name, options, desc = "", value = []) => ({ type: "multiselect", key, name, description: desc, options, value: SettingsStorage.get(key, value) }),
};

class NotificationSystem {
    constructor() {
        this.container = null;
        this.notifications = [];
    }
    init() {
        this.container = document.createElement("div");
        this.container.className = "packet-notifications";
        document.body.appendChild(this.container);
    }
    show(title, message, type = "info") {
        if (!this.container) this.init();
        const n = document.createElement("div");
        n.className = `packet-notification-v2 ${type}`;
        n.innerHTML = `
                <div class="v2-status-icon"></div>
                <div class="v2-content">
                    <span class="v2-text">${title}</span>
                    <span class="v2-subtext">${message}</span>
                </div>
            `;
        this.container.appendChild(n);
        this.notifications.push(n);
        if (this.notifications.length > 8) this.remove(this.notifications.shift());
        requestAnimationFrame(() => n.classList.add("show"));
        setTimeout(() => this.remove(n), 4000);
    }
    remove(n) {
        if (!n?.parentNode) return;
        n.classList.remove("show");
        n.classList.add("hiding");
        setTimeout(() => {
            n.remove();
            const i = this.notifications.indexOf(n);
            if (i > -1) this.notifications.splice(i, 1);
        }, 200);
    }
}
const notifications = new NotificationSystem();

class ProfileManager {
    constructor() {
        this.settingsPanel = null;
    }

    init() {
        this.setupProfileClickHandler();
        this.updateProfileUI();
    }

    setupProfileClickHandler() {
        const profileSection = document.querySelector('.profile-section');
        if (profileSection) {
            profileSection.style.cursor = 'pointer';
            profileSection.addEventListener('click', () => this.openSettings());
        }
    }

    openSettings() {
        if (this.settingsPanel) {
            this.closeSettings();
            return;
        }

        this.settingsPanel = document.createElement('div');
        this.settingsPanel.className = 'profile-settings-panel';
        this.settingsPanel.innerHTML = `
                <div class="settings-panel-header">
                    <span class="settings-panel-title">Profile Settings</span>
                    <button class="settings-panel-close">✕</button>
                </div>
                <div class="settings-panel-content">
                    <div class="setting-item">
                        <div class="setting-info">
                            <div class="setting-name">Avatar</div>
                            <div class="setting-desc">Supports JPG, PNG, GIF. Max 20MB.</div>
                        </div>
                        <div class="setting-controls">
                            <div class="profile-avatar-preview" id="avatar-preview"></div>
                            <div style="display:flex;align-items:center;gap:8px;">
                                <label class="profile-upload-btn" title="Upload">
                                    <input type="file" id="avatar-upload" accept="image/*,.gif" hidden>
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="17 8 12 3 7 8"/>
                                        <line x1="12" y1="3" x2="12" y2="15"/>
                                    </svg>
                                </label>
                                <button class="profile-reset-btn" id="reset-avatar" title="Reset">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="setting-item">
                        <div class="setting-info">
                            <div class="setting-name">Background</div>
                            <div class="setting-desc">Background for profile section. Max 20MB.</div>
                        </div>
                        <div class="setting-controls">
                            <div class="profile-bg-preview" id="bg-preview"></div>
                            <div style="display:flex;align-items:center;gap:8px;">
                                <label class="profile-upload-btn" title="Upload">
                                    <input type="file" id="bg-upload" accept="image/*,.gif" hidden>
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="17 8 12 3 7 8"/>
                                        <line x1="12" y1="3" x2="12" y2="15"/>
                                    </svg>
                                </label>
                                <button class="profile-reset-btn" id="reset-bg" title="Reset">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="setting-item">
                        <div class="setting-info">
                            <div class="setting-name">Display Name</div>
                            <div class="setting-desc">Your profile display name</div>
                        </div>
                        <input type="text" class="text-input" id="profile-name-input" maxlength="20" style="width:150px;">
                    </div>

                    <div class="setting-item">
                        <div class="setting-info">
                            <div class="setting-name">Status</div>
                            <div class="setting-desc">Your current status</div>
                        </div>
                        <input type="text" class="text-input" id="profile-status-input" maxlength="30" style="width:150px;">
                    </div>
                </div>
            `;

        document.body.appendChild(this.settingsPanel);

        const profileSection = document.querySelector('.profile-section');
        const profileRect = profileSection.getBoundingClientRect();
        const panelWidth = 400;

        let left = profileRect.right + 10;
        if (left + panelWidth > window.innerWidth) {
            left = profileRect.left - panelWidth - 10;
        }

        this.settingsPanel.style.left = `${left}px`;
        this.settingsPanel.style.top = `${profileRect.top}px`;

        this.loadCurrentSettings();
        this.initEventHandlers();
        this.makeProfileDraggable(this.settingsPanel, this.settingsPanel.querySelector('.settings-panel-header'));

        requestAnimationFrame(() => {
            this.settingsPanel.classList.add('show');
        });
    }

    makeProfileDraggable(el, handle) {
        let isDragging = false;
        let dragOffset = { x: 0, y: 0 };

        handle.style.cursor = "grab";
        handle.addEventListener("mousedown", e => {
            if (e.target.closest(".settings-panel-close")) return;
            isDragging = true;
            const r = el.getBoundingClientRect();
            dragOffset.x = e.clientX - r.left;
            dragOffset.y = e.clientY - r.top;
            handle.style.cursor = "grabbing";
            el.style.zIndex = 100010;
            el.style.transition = "none";
            e.preventDefault();
        });

        document.addEventListener("mousemove", e => {
            if (!isDragging) return;
            el.style.left = `${e.clientX - dragOffset.x}px`;
            el.style.top = `${e.clientY - dragOffset.y}px`;
            el.style.transform = "none";
        });

        document.addEventListener("mouseup", () => {
            if (isDragging) {
                isDragging = false;
                handle.style.cursor = "grab";
                el.style.transition = "";
            }
        });
    }

    loadCurrentSettings() {
        const avatarUrl = SettingsStorage.get('profile-avatar', defaultSettings['profile-avatar']);
        const bgUrl = SettingsStorage.get('profile-bg', defaultSettings['profile-bg']);
        const name = SettingsStorage.get('profile-name', defaultSettings['profile-name']);
        const status = SettingsStorage.get('profile-status', defaultSettings['profile-status']);

        const avatarPreview = document.getElementById('avatar-preview');
        avatarPreview.style.backgroundImage = `url('${avatarUrl}')`;

        const bgPreview = document.getElementById('bg-preview');
        if (bgUrl) {
            bgPreview.style.backgroundImage = `url('${bgUrl}')`;
            bgPreview.classList.add('has-background');
        } else {
            bgPreview.classList.remove('has-background');
        }

        document.getElementById('profile-name-input').value = name;
        document.getElementById('profile-status-input').value = status;
    }

    initEventHandlers() {
        this.settingsPanel.querySelector('.settings-panel-close').onclick = () => this.closeSettings();

        const avatarInput = document.getElementById('avatar-upload');
        avatarInput.onchange = (e) => this.handleAvatarUpload(e);

        const bgInput = document.getElementById('bg-upload');
        bgInput.onchange = (e) => this.handleBgUpload(e);

        document.getElementById('reset-avatar').onclick = () => this.resetAvatar();
        document.getElementById('reset-bg').onclick = () => this.resetBg();

        document.getElementById('profile-name-input').addEventListener('input', () => this.saveSettings());
        document.getElementById('profile-status-input').addEventListener('input', () => this.saveSettings());
    }

    handleAvatarUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        if (file.size > 20 * 1024 * 1024) {
            if (SettingsStorage.get('notifications', false)) {
                notifications.show('Profile', 'File size must be less than 20MB', 'disabled');
            }
            return;
        }

        if (!file.type.match('image.*')) {
            if (SettingsStorage.get('notifications', false)) {
                notifications.show('Profile', 'Please select an image file', 'disabled');
            }
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const avatarPreview = document.getElementById('avatar-preview');
            avatarPreview.style.backgroundImage = `url('${e.target.result}')`;

            SettingsStorage.set('profile-avatar', e.target.result);
            this.updateProfileUI();

            if (SettingsStorage.get('notifications', false)) {
                notifications.show('Profile', 'Avatar updated', 'enabled');
            }
        };
        reader.readAsDataURL(file);
    }

    handleBgUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        if (file.size > 20 * 1024 * 1024) {
            if (SettingsStorage.get('notifications', false)) {
                notifications.show('Profile', 'File size must be less than 20MB', 'disabled');
            }
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const bgPreview = document.getElementById('bg-preview');
            bgPreview.style.backgroundImage = `url('${e.target.result}')`;
            bgPreview.classList.add('has-background');

            SettingsStorage.set('profile-bg', e.target.result);
            this.updateProfileUI();

            if (SettingsStorage.get('notifications', false)) {
                notifications.show('Profile', 'Background updated', 'enabled');
            }
        };
        reader.readAsDataURL(file);
    }

    resetAvatar() {
        const defaultAvatar = defaultSettings['profile-avatar'];
        const avatarPreview = document.getElementById('avatar-preview');
        avatarPreview.style.backgroundImage = `url('${defaultAvatar}')`;

        SettingsStorage.set('profile-avatar', defaultAvatar);
        this.updateProfileUI();

        if (SettingsStorage.get('notifications', false)) {
            notifications.show('Profile', 'Avatar reset to default', 'enabled');
        }
    }

    resetBg() {
        const bgPreview = document.getElementById('bg-preview');
        bgPreview.style.backgroundImage = '';
        bgPreview.classList.remove('has-background');

        SettingsStorage.set('profile-bg', '');
        this.updateProfileUI();

        if (SettingsStorage.get('notifications', false)) {
            notifications.show('Profile', 'Background removed', 'enabled');
        }
    }

    saveSettings() {
        const name = document.getElementById('profile-name-input').value;
        const status = document.getElementById('profile-status-input').value;

        SettingsStorage.set('profile-name', name);
        SettingsStorage.set('profile-status', status);

        this.updateProfileUI();
    }

    updateProfileUI() {
        const avatarUrl = SettingsStorage.get('profile-avatar', defaultSettings['profile-avatar']);
        const bgUrl = SettingsStorage.get('profile-bg', defaultSettings['profile-bg']);
        const name = SettingsStorage.get('profile-name', defaultSettings['profile-name']);
        const status = SettingsStorage.get('profile-status', defaultSettings['profile-status']);

        const avatarImg = document.querySelector('.profile-avatar img');
        if (avatarImg) {
            avatarImg.src = avatarUrl;
        }

        const profileSection = document.querySelector('.profile-section');
        if (profileSection) {
            if (bgUrl && bgUrl.trim() !== '') {
                profileSection.style.backgroundImage = `url('${bgUrl}')`;
                profileSection.style.backgroundSize = 'cover';
                profileSection.style.backgroundPosition = 'center';
            } else {
                profileSection.style.backgroundImage = '';
                profileSection.style.background = '#1f202a';
            }
        }

        const nameEl = document.querySelector('.profile-name');
        const statusEl = document.querySelector('.profile-status');
        if (nameEl) nameEl.textContent = name;
        if (statusEl) statusEl.textContent = status;
    }

    closeSettings() {
        if (this.settingsPanel) {
            this.settingsPanel.classList.remove('show');
            setTimeout(() => {
                this.settingsPanel.remove();
                this.settingsPanel = null;
            }, 200);
        }
    }
}

class PacketTab {
    constructor(id, name, icon) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.modules = [];
    }
    add(key, name, desc = "", opts = {}) {
        this.modules.push(UI.module(key, name, desc, opts));
        return this;
    }
}

export class PacketMenu {
    constructor() {
        Object.assign(this, {
            tabs: [],
            settingsPanels: new Map(),
            panelCounter: 0,
            isMenuVisible: true,
            isAnimating: false,
            currentTab: null,
            dragOffset: { x: 0, y: 0 },
            moduleColumns: 2,
            activeDropdown: null,
            activeColorPicker: null,
            activeBindInput: null,
            moduleNames: new Map()
        });
        window.menu = this;
    }
    createTab(id, name, icon) {
        const tab = new PacketTab(id, name, icon);
        this.tabs.push(tab);
        if (!this.currentTab) this.currentTab = id;
        return tab;
    }
    updateSliderFill(s) {
        const min = parseFloat(s.min) || 0, max = parseFloat(s.max) || 100, val = parseFloat(s.value) || 0;
        const pct = ((val - min) / (max - min)) * 100;
        const col = SettingsStorage.get("client-color", "#9696FF");
        s.style.background = `linear-gradient(to right, ${col} 0%, ${col} ${pct}%, #2a2b36 ${pct}%, #2a2b36 100%)`;
    }
    updateRgbSliderFill(s, color) {
        const pct = (parseFloat(s.value) / 255) * 100;
        s.style.background = `linear-gradient(to right, ${color} 0%, ${color} ${pct}%, #2a2b36 ${pct}%, #2a2b36 100%)`;
    }
    createSettingHTML(s) {
        const desc = s.description || "", saved = SettingsStorage.get(s.key, s.value);
        switch (s.type) {
            case "toggle":
                return `<div class="setting-item"><div class="setting-info"><div class="setting-name">${s.name}</div><div class="setting-desc">${desc}</div></div><input type="checkbox" id="${s.key}" class="toggle-switch" ${SettingsStorage.get(s.key, s.isActive) ? "checked" : ""} data-setting-key="${s.key}"/></div>`;
            case "toggle-color":
                const colorVal = SettingsStorage.get(s.colorKey, s.colorValue);
                return `<div class="setting-item"><div class="setting-info"><div class="setting-name">${s.name}</div><div class="setting-desc">${desc}</div></div><div style="display:flex;align-items:center;gap:10px"><div class="custom-color-trigger" style="background-color:${colorVal}" data-setting-key="${s.colorKey}" data-current-color="${colorVal}"></div><input type="checkbox" id="${s.key}" class="toggle-switch" ${SettingsStorage.get(s.key, s.isActive) ? "checked" : ""} data-setting-key="${s.key}"/></div></div>`;
            case "color":
                const cVal = SettingsStorage.get(s.key, s.value);
                return `<div class="setting-item"><div class="setting-info"><div class="setting-name">${s.name}</div><div class="setting-desc">${desc}</div></div><div class="custom-color-trigger" style="background-color:${cVal}" data-setting-key="${s.key}" data-current-color="${cVal}"></div></div>`;
            case "multiselect":
                const mVal = SettingsStorage.get(s.key, s.value) || [];
                const displayVal = mVal.length > 0 ? `${mVal.length} selected` : "None";
                return `<div class="setting-item"><div class="setting-info"><div class="setting-name">${s.name}</div><div class="setting-desc">${desc}</div></div><div class="custom-multiselect-trigger" data-select-key="${s.key}" data-options='${JSON.stringify(s.options)}' data-value='${JSON.stringify(mVal)}'><span class="select-value">${displayVal}</span><span class="select-arrow">▼</span></div></div>`;
            case "select":
                const sv = SettingsStorage.get(s.key, s.value);
                return `<div class="setting-item"><div class="setting-info"><div class="setting-name">${s.name}</div><div class="setting-desc">${desc}</div></div><div class="custom-select-trigger" data-select-key="${s.key}" data-options='${JSON.stringify(s.options)}' data-value="${sv}"><span class="select-value">${String(sv).charAt(0).toUpperCase() + String(sv).slice(1)}</span><span class="select-arrow">▼</span></div><input type="hidden" id="${s.key}" value="${sv}" data-setting-key="${s.key}"/></div>`;
            case "slider":
                const slv = SettingsStorage.get(s.key, s.value);
                let suffix = "";
                if (s.name.includes("Speed") || s.name.includes("Delay")) suffix = "ms";
                else if (s.name.includes("Chance") || s.name.includes("Smoothing") || s.name.includes("Opacity")) suffix = "%";
                else if (s.name.includes("Angle") || s.name.includes("View")) suffix = "°";
                return `<div class="setting-item slider-item-styled"><div class="setting-info"><div class="setting-name">${s.name}</div></div><div class="slider-controls-wrapper"><div class="slider-container"><input type="range" id="${s.key}" class="slider-input" min="${s.min}" max="${s.max}" value="${slv}" data-setting-key="${s.key}"/></div><div class="slider-value-box"><span class="slider-value">${slv}${suffix}</span></div></div></div>`;
            case "bind":
                const bv = SettingsStorage.get(s.key, s.value);
                return `<div class="setting-item"><div class="setting-info"><div class="setting-name">${s.name}</div><div class="setting-desc">${desc}</div></div><div class="bind-input" data-bind-key="${s.key}" data-value="${bv}"><span class="bind-value">${bv}</span></div></div>`;
            case "toggleselect":
                const isToggled = SettingsStorage.get(s.toggleKey, s.isActive);
                const selectVal = SettingsStorage.get(s.selectKey, s.value);
                return `<div class="setting-item"><div class="setting-info"><div class="setting-name">${s.name}</div><div class="setting-desc">${s.description}</div></div><div style="display:flex;align-items:center;gap:10px"><div class="custom-select-trigger" data-select-key="${s.selectKey}" data-options='${JSON.stringify(s.options)}' data-value="${selectVal}" style="min-width: 120px;"><span class="select-value">${String(selectVal)}</span><span class="select-arrow">▼</span></div><input type="checkbox" id="${s.toggleKey}" class="toggle-switch" ${isToggled ? "checked" : ""} data-setting-key="${s.toggleKey}"/></div></div>`;
            case "text":
                const tv = SettingsStorage.get(s.key, s.value);
                return `<div class="setting-item"><div class="setting-info"><div class="setting-name">${s.name}</div><div class="setting-desc">${desc}</div></div><input type="text" id="${s.key}" class="text-input" value="${tv}" maxlength="${s.maxLength}" data-setting-key="${s.key}" spellcheck="false"/></div>`;
            default: return "";
        }
    }
    createModuleHTML(m, i) {
        const lang = SettingsStorage.get("menu-language", "en");
        let desc = TRANSLATIONS[lang]?.[m.key] || m.description;
        const hasSettings = m.settings?.length > 0;
        const isChecked = SettingsStorage.get(m.key, m.isActive);
        this.moduleNames.set(m.key, m.name);
        return `<div class="module-card" data-module-id="${m.key}" style="animation-delay:${i * 0.05}s"><div class="module-header"><span class="module-title">${m.name}</span><div class="module-desc">${desc}</div></div><div class="module-toggle"><span class="toggle-label">Enabled</span><div class="module-toggle-controls">${hasSettings ? `<img src="https://i.imgur.com/JCNdDle.png" class="settings-btn" data-settings-for="${m.key}"/>` : ""}<input type="checkbox" id="${m.key}" class="toggle-switch module-toggle-switch ${m.locked ? "locked" : ""}" ${isChecked ? "checked" : ""} ${m.locked ? "disabled" : ""} data-setting-key="${m.key}" data-module-name="${m.name}"/></div></div></div>`;
    }
    createTabHTML(t, isActive, i) {
        return `<div class="tab ${isActive ? "active" : ""}" data-tab="${t.id}" style="animation-delay:${i * 0.05}s"><img src="${t.icon}" class="tab-icon"/><span class="tab-name">${t.name}</span></div>`;
    }
    createTabContentHTML(t) {
        // ЛОГИКА СОРТИРОВКИ
        let sortedModules = [...t.modules];
        const sortType = SettingsStorage.get("modules-sort", "None");
        if (sortType === "A-Z") {
            sortedModules.sort((a, b) => a.name.localeCompare(b.name));
        }

        return `<div class="tab-content ${t.id === this.currentTab ? "active" : ""}" id="content-${t.id}">
        <div class="modules-grid">${sortedModules.map((m, i) => this.createModuleHTML(m, i)).join("")}</div>
        <div class="content-shadow-top"></div>
        <div class="content-shadow-bottom"></div>
    </div>`;
    }

    findModule(key) {
        for (const t of this.tabs) {
            const m = t.modules.find(m => m.key === key);
            if (m) return m;
        }
        return null;
    }
    findPanelByModuleId(key) {
        for (const [id, d] of this.settingsPanels) if (d.moduleKey === key) return id;
        return null;
    }
    showColorPicker(trigger) {
        if (this.activeColorPicker?.dataset.triggerId === trigger.dataset.settingKey) {
            this.hideColorPicker();
            return;
        }
        this.hideColorPicker();
        const key = trigger.dataset.settingKey;
        let currentColor = trigger.dataset.currentColor || "#ffffff";
        let rgb = ColorUtils.hexToRgb(currentColor);
        const picker = document.createElement("div");
        picker.className = "custom-color-picker-popup";
        picker.dataset.triggerId = key;
        let gridHtml = `<div class="palette-grid">`;
        PRESET_COLORS.forEach(c => gridHtml += `<div class="palette-option" style="background-color:${c}" data-color="${c}"></div>`);
        gridHtml += `</div>`;
        picker.innerHTML = `<div class="picker-header">Custom Color</div><div class="picker-main-section"><div class="color-preview-large" style="background-color:${currentColor}"></div><div class="rgb-sliders"><div class="rgb-row"><span class="rgb-label">R</span><input type="range" class="rgb-slider red" min="0" max="255" value="${rgb.r}"><span class="rgb-val">${rgb.r}</span></div><div class="rgb-row"><span class="rgb-label">G</span><input type="range" class="rgb-slider green" min="0" max="255" value="${rgb.g}"><span class="rgb-val">${rgb.g}</span></div><div class="rgb-row"><span class="rgb-label">B</span><input type="range" class="rgb-slider blue" min="0" max="255" value="${rgb.b}"><span class="rgb-val">${rgb.b}</span></div></div></div><div class="hex-input-container"><span class="hex-hash">#</span><input type="text" class="custom-hex-input" value="${currentColor.replace('#', '')}" maxlength="6"></div><div class="picker-divider"></div><div class="picker-header">Presets</div>${gridHtml}`;
        document.body.appendChild(picker);
        const rect = trigger.getBoundingClientRect();
        picker.style.left = `${rect.left}px`;
        picker.style.top = `${rect.bottom + 8}px`;
        requestAnimationFrame(() => {
            const pr = picker.getBoundingClientRect();
            if (pr.bottom > window.innerHeight) picker.style.top = `${rect.top - pr.height - 8}px`;
            if (pr.right > window.innerWidth) picker.style.left = `${window.innerWidth - pr.width - 10}px`;
            picker.classList.add("show");
        });
        const preview = picker.querySelector(".color-preview-large");
        const hexInput = picker.querySelector(".custom-hex-input");
        const rangeR = picker.querySelector(".rgb-slider.red");
        const rangeG = picker.querySelector(".rgb-slider.green");
        const rangeB = picker.querySelector(".rgb-slider.blue");
        const valR = rangeR.nextElementSibling;
        const valG = rangeG.nextElementSibling;
        const valB = rangeB.nextElementSibling;
        this.updateRgbSliderFill(rangeR, '#ff4444');
        this.updateRgbSliderFill(rangeG, '#44ff44');
        this.updateRgbSliderFill(rangeB, '#4444ff');
        const updateFromSliders = () => {
            const r = parseInt(rangeR.value), g = parseInt(rangeG.value), b = parseInt(rangeB.value);
            valR.textContent = r; valG.textContent = g; valB.textContent = b;
            this.updateRgbSliderFill(rangeR, '#ff4444');
            this.updateRgbSliderFill(rangeG, '#44ff44');
            this.updateRgbSliderFill(rangeB, '#4444ff');
            const hex = ColorUtils.rgbToHex(r, g, b);
            preview.style.backgroundColor = hex;
            hexInput.value = hex.replace("#", "");
            this.updateColor(key, trigger, hex);
        };
        const updateFromHex = () => {
            let val = hexInput.value.replace(/[^0-9A-Fa-f]/g, '');
            hexInput.value = val;
            if (val.length === 6) {
                const hex = "#" + val;
                const rgbObj = ColorUtils.hexToRgb(hex);
                rangeR.value = rgbObj.r; rangeG.value = rgbObj.g; rangeB.value = rgbObj.b;
                updateFromSliders();
            }
        };
        [rangeR, rangeG, rangeB].forEach(r => r.addEventListener("input", updateFromSliders));
        hexInput.addEventListener("input", updateFromHex);
        picker.querySelectorAll(".palette-option").forEach(opt => {
            opt.addEventListener("click", e => {
                e.stopPropagation();
                const rgbObj = ColorUtils.hexToRgb(opt.dataset.color);
                rangeR.value = rgbObj.r; rangeG.value = rgbObj.g; rangeB.value = rgbObj.b;
                updateFromSliders();
            });
        });
        picker.addEventListener("click", e => e.stopPropagation());
        this.activeColorPicker = picker;
    }
    initMultiSelectTriggers(c = document) {
        c.querySelectorAll(".custom-multiselect-trigger").forEach(t => {
            t.removeEventListener("click", t._clickHandler);
            t._clickHandler = e => { e.stopPropagation(); this.showMultiSelect(t); };
            t.addEventListener("click", t._clickHandler);
        });
    }

    showMultiSelect(trigger) {
        // Закрываем, если уже открыто то же самое
        if (this.activeDropdown?.dataset.triggerKey === trigger.dataset.selectKey) {
            this.hideDropdown();
            return;
        }
        this.hideDropdown(); // Закрываем другие

        const options = JSON.parse(trigger.dataset.options);
        let currentValues = JSON.parse(trigger.dataset.value || "[]");
        const key = trigger.dataset.selectKey;

        const dropdown = document.createElement("div");
        dropdown.className = "custom-dropdown multiselect-dropdown";
        dropdown.dataset.triggerKey = key;

        // Генерируем HTML опций с чекбоксами
        dropdown.innerHTML = options.map(o => {
            const isSelected = currentValues.includes(o);
            return `<div class="dropdown-option multiselect-option ${isSelected ? "selected" : ""}" data-value="${o}">
                            <div class="multiselect-checkbox ${isSelected ? "checked" : ""}"></div>
                            <span>${o}</span>
                        </div>`;
        }).join("");

        document.body.appendChild(dropdown);

        // Позиционирование (как у обычного dropdown)
        const rect = trigger.getBoundingClientRect();
        dropdown.style.left = `${rect.left}px`;
        dropdown.style.top = `${rect.bottom + 5}px`;
        dropdown.style.minWidth = `${rect.width}px`;

        requestAnimationFrame(() => {
            const dr = dropdown.getBoundingClientRect();
            if (dr.bottom > window.innerHeight) dropdown.style.top = `${rect.top - dr.height - 5}px`;
            if (dr.right > window.innerWidth) dropdown.style.left = `${window.innerWidth - dr.width - 10}px`;
            dropdown.classList.add("show");
        });

        // Обработка кликов по опциям
        dropdown.querySelectorAll(".dropdown-option").forEach(opt => opt.addEventListener("click", e => {
            e.stopPropagation(); // Не закрываем меню при клике
            const val = opt.dataset.value;
            const checkbox = opt.querySelector(".multiselect-checkbox");

            if (currentValues.includes(val)) {
                // Удаляем
                currentValues = currentValues.filter(v => v !== val);
                opt.classList.remove("selected");
                checkbox.classList.remove("checked");
            } else {
                // Добавляем
                currentValues.push(val);
                opt.classList.add("selected");
                checkbox.classList.add("checked");
            }

            // Сохраняем и обновляем UI
            SettingsStorage.set(key, currentValues);
            trigger.dataset.value = JSON.stringify(currentValues);

            // Обновляем текст на кнопке
            const displayVal = currentValues.length > 0 ? `${currentValues.length} selected` : "None";
            trigger.querySelector(".select-value").textContent = displayVal;
        }));

        this.activeDropdown = dropdown;
    }
    hideColorPicker() {
        if (this.activeColorPicker) {
            const p = this.activeColorPicker;
            p.classList.remove("show");
            this.activeColorPicker = null;
            setTimeout(() => p.remove(), 200);
        }
    }
    updateColor(key, trigger, color) {
        trigger.style.backgroundColor = color;
        trigger.dataset.currentColor = color;
        if (trigger.dataset.callbackMode === "true") {
            return;
        }
        SettingsStorage.set(key, color);
        if (key === "client-color") {
            document.documentElement.style.setProperty("--client-color", color);
            document.querySelectorAll(".slider-input").forEach(s => this.updateSliderFill(s));
        }
    }
    updateMenuText() {
        const lang = SettingsStorage.get("menu-language", "en");
        document.querySelectorAll(".module-card").forEach(card => {
            const key = card.dataset.moduleId;
            const descEl = card.querySelector(".module-desc");
            if (TRANSLATIONS[lang]?.[key] && descEl) descEl.textContent = TRANSLATIONS[lang][key];
        });
    }
    showDropdown(trigger) {
        if (this.activeDropdown?.dataset.triggerKey === trigger.dataset.selectKey) {
            this.hideDropdown();
            return;
        }
        this.hideDropdown();
        const options = JSON.parse(trigger.dataset.options), currentValue = trigger.dataset.value, key = trigger.dataset.selectKey;
        const dropdown = document.createElement("div");
        dropdown.className = "custom-dropdown";
        dropdown.dataset.triggerKey = key;
        dropdown.innerHTML = options.map(o => `<div class="dropdown-option ${String(o) === String(currentValue) ? "selected" : ""}" data-value="${o}">${String(o).charAt(0).toUpperCase() + String(o).slice(1)}</div>`).join("");
        document.body.appendChild(dropdown);
        const rect = trigger.getBoundingClientRect();
        dropdown.style.left = `${rect.left}px`;
        dropdown.style.top = `${rect.bottom + 5}px`;
        dropdown.style.minWidth = `${rect.width}px`;
        requestAnimationFrame(() => {
            const dr = dropdown.getBoundingClientRect();
            if (dr.bottom > window.innerHeight) dropdown.style.top = `${rect.top - dr.height - 5}px`;
            if (dr.right > window.innerWidth) dropdown.style.left = `${window.innerWidth - dr.width - 10}px`;
            dropdown.classList.add("show");
        });
        dropdown.querySelectorAll(".dropdown-option").forEach(opt => opt.addEventListener("click", e => {
            e.stopPropagation();
            const v = opt.dataset.value;
            trigger.dataset.value = v;
            trigger.querySelector(".select-value").textContent = String(v).charAt(0).toUpperCase() + String(v).slice(1);
            const hi = document.getElementById(key);
            if (hi) hi.value = v;
            SettingsStorage.set(key, v);
            if (key === "menu-language") this.updateMenuText();
            if (key === "module-columns") document.documentElement.style.setProperty("--module-columns", v);
            this.hideDropdown();
        }));
        this.activeDropdown = dropdown;
    }
    hideDropdown() {
        if (this.activeDropdown) {
            const d = this.activeDropdown;
            d.classList.remove("show");
            this.activeDropdown = null;
            setTimeout(() => d.parentNode && d.remove(), 150);
        }
    }
    createSettingsPanel(moduleKey, btn) {
        const existingId = this.findPanelByModuleId(moduleKey);
        if (existingId) { this.closeSettingsPanel(existingId); return null; }
        const module = this.findModule(moduleKey);
        if (!module?.settings?.length) return null;
        const panelId = `settings-panel-${this.panelCounter++}`;
        const panel = document.createElement("div");
        panel.id = panelId;
        panel.className = "settings-panel";
        panel.dataset.moduleKey = moduleKey;
        panel.innerHTML = `<div class="settings-panel-header"><span class="settings-panel-title">${module.name}</span><button class="settings-panel-close">✕</button></div><div class="settings-panel-content">${module.settings.map(s => this.createSettingHTML(s)).join("")}</div>`;
        document.body.appendChild(panel);
        let posX = 100, posY = 100;
        if (btn) { const r = btn.getBoundingClientRect(); posX = r.right + 10; posY = r.top - 10; }
        panel.style.left = `${posX}px`;
        panel.style.top = `${posY}px`;
        requestAnimationFrame(() => {
            const pr = panel.getBoundingClientRect();
            if (pr.bottom > window.innerHeight) panel.style.top = `${window.innerHeight - pr.height - 10}px`;
            if (pr.right > window.innerWidth) panel.style.left = `${posX - pr.width - 60}px`;
            if (pr.top < 0) panel.style.top = "10px";
            if (pr.left < 0) panel.style.left = "10px";
            panel.classList.add("show");
        });
        this.makeDraggable(panel, panel.querySelector(".settings-panel-header"));
        panel.querySelector(".settings-panel-close").addEventListener("click", () => this.closeSettingsPanel(panelId));
        this.initPanelEventListeners(panel);
        this.initSelectTriggers(panel);
        this.initMultiSelectTriggers(panel);
        this.initColorTriggers(panel);
        this.initBindInputs(panel);
        this.initSliderFills(panel);
        panel.style.zIndex = this.getTopZIndex() + 1;
        this.settingsPanels.set(panelId, { panel, moduleKey });
        return panel;
    }

    initSliderFills(c = document) {
        c.querySelectorAll(".slider-input").forEach(s => this.updateSliderFill(s));
    }
    initPanelEventListeners(p) {
        p.querySelectorAll(".toggle-switch").forEach(t => t.addEventListener("change", () => {
            const k = t.dataset.settingKey;
            if (k) SettingsStorage.set(k, t.checked);
        }));
        p.querySelectorAll(".slider-input").forEach(s => s.addEventListener("input", () => {
            const k = s.dataset.settingKey, vd = s.parentElement.querySelector(".slider-value");
            if (vd) vd.textContent = s.value;
            this.updateSliderFill(s);
            if (k) {
                SettingsStorage.set(k, parseInt(s.value));
                if (k === "border-radius") document.documentElement.style.setProperty("--menu-border-radius", `${s.value}px`);
            }
        }));
        p.querySelectorAll(".slider-input").forEach(s => s.addEventListener("input", () => {
            const k = s.dataset.settingKey;
            const suffix = s.dataset.suffix || "";

            // Ищем бокс со значением внутри общего контейнера
            const wrapper = s.closest('.slider-controls-wrapper');
            const vd = wrapper ? wrapper.querySelector(".slider-value") : null;

            if (vd) vd.textContent = s.value + suffix;

            this.updateSliderFill(s);
            if (k) {
                SettingsStorage.set(k, parseInt(s.value));
                if (k === "border-radius") document.documentElement.style.setProperty("--menu-border-radius", `${s.value}px`);
            }
        }));
        p.querySelectorAll(".text-input").forEach(t => t.addEventListener("input", () => {
            const k = t.dataset.settingKey;
            if (k) SettingsStorage.set(k, t.value);
        }));
    }
    initBindInputs(c = document) {
        c.querySelectorAll(".bind-input").forEach(b => {
            b.removeEventListener("click", b._clickHandler);
            b._clickHandler = e => {
                e.stopPropagation();
                if (this.activeBindInput && this.activeBindInput !== b) this.activeBindInput.classList.remove("listening");
                b.classList.add("listening");
                b.querySelector(".bind-value").textContent = "...";
                this.activeBindInput = b;
            };
            b.addEventListener("click", b._clickHandler);
        });
    }
    handleBindKeyPress(e) {
        if (!this.activeBindInput) return;
        e.preventDefault();
        e.stopPropagation();
        const key = this.activeBindInput.dataset.bindKey;
        let keyName = e.code === "Escape" ? "NONE" : e.code === "Space" ? "Space" : e.code;
        this.activeBindInput.dataset.value = keyName;
        this.activeBindInput.querySelector(".bind-value").textContent = keyName;
        this.activeBindInput.classList.remove("listening");
        SettingsStorage.set(key, keyName);
        this.activeBindInput = null;
    }
    closeSettingsPanel(id) {
        const d = this.settingsPanels.get(id);
        if (!d) return;
        d.panel.classList.remove("show");
        d.panel.classList.add("hiding");
        setTimeout(() => { d.panel.remove(); this.settingsPanels.delete(id); }, 200);
    }
    makeDraggable(el, handle) {
        let isDragging = false;
        handle.style.cursor = "grab";
        handle.addEventListener("mousedown", e => {
            if (e.target.closest(".settings-panel-close")) return;
            isDragging = true;
            const r = el.getBoundingClientRect();
            this.dragOffset.x = e.clientX - r.left;
            this.dragOffset.y = e.clientY - r.top;
            handle.style.cursor = "grabbing";
            el.style.zIndex = this.getTopZIndex() + 1;
            el.style.transition = "none";
            e.preventDefault();
        });
        document.addEventListener("mousemove", e => {
            if (!isDragging) return;
            el.style.left = `${e.clientX - this.dragOffset.x}px`;
            el.style.top = `${e.clientY - this.dragOffset.y}px`;
            el.style.transform = "none";
        });
        document.addEventListener("mouseup", () => {
            if (isDragging) { isDragging = false; handle.style.cursor = "grab"; el.style.transition = ""; }
        });
    }
    getTopZIndex() {
        let maxZ = 100000;
        this.settingsPanels.forEach(({ panel }) => { const z = parseInt(panel.style.zIndex) || 100000; if (z > maxZ) maxZ = z; });
        return maxZ;
    }
    toggleMenu() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        const menu = getEl("hud");
        if (this.isMenuVisible) {
            menu.classList.remove("show");
            menu.classList.add("hiding");
            setTimeout(() => { menu.style.display = "none"; menu.classList.remove("hiding"); this.isAnimating = false; }, 250);

            if (SettingsStorage.get("hide-settings-on-close", false)) {
                this.settingsPanels.forEach(({ panel }, id) => {
                    this.closeSettingsPanel(id);
                });
            }
        } else {
            menu.style.display = "block";
            menu.classList.remove("hiding");
            requestAnimationFrame(() => { menu.classList.add("show"); this.reanimateModules(); setTimeout(() => this.isAnimating = false, 250); });
        }
        this.isMenuVisible = !this.isMenuVisible;
    }
    reanimateModules() {
        const ac = document.querySelector(".tab-content.active");
        if (ac) ac.querySelectorAll(".module-card").forEach((c, i) => {
            c.style.animation = "none";
            c.style.opacity = "0";
            c.style.transform = "scale(0.9)";
            c.offsetHeight;
            c.style.animation = `modulePopIn 0.3s ease forwards`;
            c.style.animationDelay = `${i * 0.05}s`;
        });
    }
    filterModules(text) {
        const lower = text.toLowerCase();
        document.querySelectorAll(".module-card").forEach(c => {
            const t = c.querySelector(".module-title").textContent.toLowerCase();
            const d = c.querySelector(".module-desc").textContent.toLowerCase();
            if (t.includes(lower) || d.includes(lower) || text === "") {
                c.style.display = "block";
                c.style.animation = "modulePopIn 0.3s ease forwards";
            } else c.style.display = "none";
        });
    }
    initSelectTriggers(c = document) {
        c.querySelectorAll(".custom-select-trigger").forEach(t => {
            t.removeEventListener("click", t._clickHandler);
            t._clickHandler = e => { e.stopPropagation(); this.showDropdown(t); };
            t.addEventListener("click", t._clickHandler);
        });
    }
    initColorTriggers(c = document) {
        c.querySelectorAll(".custom-color-trigger").forEach(t => {
            t.removeEventListener("click", t._clickHandler);
            t._clickHandler = e => { e.stopPropagation(); this.showColorPicker(t); };
            t.addEventListener("click", t._clickHandler);
        });
    }
    updateScrollShadows() {
        document.querySelectorAll(".tab-content").forEach(c => {
            const st = c.querySelector(".content-shadow-top"), sb = c.querySelector(".content-shadow-bottom");
            if (!st || !sb) return;
            c.scrollTop > 10 ? st.classList.add("visible") : st.classList.remove("visible");
            c.scrollTop + c.clientHeight < c.scrollHeight - 10 ? sb.classList.add("visible") : sb.classList.remove("visible");
        });
    }
    init() {
        const hud = document.createElement("div");
        hud.id = "hud";
        hud.className = "packet-menu show";

        const avatarUrl = SettingsStorage.get('profile-avatar', defaultSettings['profile-avatar']);
        const name = SettingsStorage.get('profile-name', defaultSettings['profile-name']);
        const status = SettingsStorage.get('profile-status', defaultSettings['profile-status']);

        const initialTab = this.tabs.find(t => t.id === this.currentTab);
        const initialTabName = initialTab ? initialTab.name : "Combat";
        const initialTabIcon = initialTab ? initialTab.icon : "";


        hud.innerHTML = `<div class="menu-container">
        <div class="menu-sidebar">
            <!-- НОВЫЙ ХЕДЕР ТУТ -->
            <div class="menu-header-custom">
                <div class="header-icon-container">
                    <img src="https://i.imgur.com/iocotVS.png" class="header-icon"/>
                </div>
                <div class="header-text-container">
                    <div class="header-main-title">MooClient</div>
                    <div class="header-sub-title">Menu by RaZoshi</div>
                </div>
            </div>
            <div class="tabs-container">${this.tabs.map((t, i) => this.createTabHTML(t, t.id === this.currentTab, i)).join("")}</div>
            <div class="profile-section">
                <div class="profile-avatar"><img src="${avatarUrl}" alt="avatar"/></div>
                <div class="profile-info">
                    <div class="profile-name">${name}</div>
                    <div class="profile-status">${status}</div>
                </div>
            </div>
        </div>
        <div class="menu-content">
            <div class="search-container">
                <div class="header-navigation">
                <div class="nav-arrow-holder">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    </div>
    <div class="nav-item-holder">
        <img src="${initialTabIcon}" id="active-tab-icon" class="nav-nav-icon"/>
        <span id="active-tab-display">${initialTabName}</span>
    </div>
</div>
                <div class="search-controls">
                    <div class="search-wrapper">
                        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                        <input type="text" id="module-search" class="search-input" placeholder="Search..."/>
                    </div>
                    <button id="close-menu-btn" class="menu-close-button">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
            ${this.tabs.map(t => this.createTabContentHTML(t)).join("")}
        </div>
    </div>`;

        document.body.appendChild(hud);

        // ВАЖНО: Мы меняем селектор здесь, чтобы перетаскивание работало за новый хедер
        this.makeDraggable(hud, hud.querySelector(".menu-header-custom"));

        this.initEventListeners();
        this.injectStyles();

        setTimeout(() => {
            this.reanimateModules();
            this.applySettings();
            this.updateScrollShadows();
            this.initSliderFills();
        }, 100);

        const profileManager = new ProfileManager();
        profileManager.init();

        return this;
    }
    applySettings() {
        document.documentElement.style.setProperty("--client-color", SettingsStorage.get("client-color", "#9696FF"));
        document.documentElement.style.setProperty("--menu-border-radius", `${SettingsStorage.get("border-radius", 12)}px`);
        document.documentElement.style.setProperty("--module-columns", SettingsStorage.get("module-columns", 2));
    }
    initEventListeners() {
        getEl("module-search")?.addEventListener("input", e => this.filterModules(e.target.value));
        getEl("close-menu-btn")?.addEventListener("click", () => this.toggleMenu());
        document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => {
            const tabId = tab.dataset.tab;
            if (this.currentTab === tabId) return;

            // ОБНОВЛЕНИЕ ЗАГОЛОВКА
            const tabName = tab.querySelector('.tab-name').textContent;
            const displayEl = document.getElementById('active-tab-display');
            if (displayEl) displayEl.textContent = tabName;

            // Внутри обработчика клика по табам:
            const tabIcon = tab.querySelector('.tab-icon').src; // Достаем иконку

            const iconEl = document.getElementById('active-tab-icon'); // Находим элемент иконки в шапке

            if (iconEl) iconEl.src = tabIcon; // Обновляем иконку

            this.currentTab = tabId;
            document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
            tab.classList.add("active");
            const content = getEl(`content-${tabId}`);
            if (content) {
                content.classList.add("active");
                content.scrollTop = 0;
                setTimeout(() => this.updateScrollShadows(), 50);
            }
            const search = getEl("module-search");
            if (search) { search.value = ""; this.filterModules(""); }
        }));
        document.querySelectorAll(".tab-content").forEach(c => c.addEventListener("scroll", () => this.updateScrollShadows()));
        document.querySelectorAll(".settings-btn").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); this.createSettingsPanel(b.dataset.settingsFor, b); }));
        document.addEventListener("keydown", e => {
            if (this.activeBindInput) { this.handleBindKeyPress(e); return; }
            if (e.code === "Escape") this.toggleMenu();
        });
        document.addEventListener("click", e => {
            if (!e.target.closest(".custom-select-trigger") && !e.target.closest(".custom-dropdown")) this.hideDropdown();
            if (this.activeColorPicker && !e.target.closest(".custom-color-picker-popup")) this.hideColorPicker();
            if (this.activeBindInput && !e.target.closest(".bind-input")) {
                const k = this.activeBindInput.dataset.bindKey;
                this.activeBindInput.querySelector(".bind-value").textContent = SettingsStorage.get(k, "NONE");
                this.activeBindInput.classList.remove("listening");
                this.activeBindInput = null;
            }
        });
        document.querySelectorAll(".module-toggle-switch").forEach(t => t.addEventListener("change", function () {
            const k = this.dataset.settingKey, name = this.dataset.moduleName || k, enabled = this.checked;
            if (k) SettingsStorage.set(k, enabled);
            if (SettingsStorage.get("notifications", false) || k === "notifications") {
                notifications.show(name, enabled ? "Module enabled" : "Module disabled", enabled ? "enabled" : "disabled");
            }
            if (k === "discord-rpc") {
                if (enabled) {
                    rpc.init();
                } else {
                    rpc.disconnect();
                }
            }
        }));
        document.querySelectorAll(".toggle-switch:not(.module-toggle-switch)").forEach(t => t.addEventListener("change", function () {
            const k = this.dataset.settingKey;
            if (k) SettingsStorage.set(k, this.checked);
        }));
        this.initSelectTriggers();
    }
    injectStyles() {
        const styles = `@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap');:root {--menu-border-radius: 12px;--client-color: #9696FF;--module-columns: 2;}* {outline: none;font-family: 'Nunito', sans-serif }.background-img-play, #cross-promo, #bottom-wrap, #google_play, #game-left-content-main, #game-bottom-content, #game-right-content-main, #right-content, #left-content {display: none !important }#game-content {justify-content: center }#main-content {width: auto;background: transparent }::-webkit-scrollbar {width: 8px;height: 8px }::-webkit-scrollbar-track {background: #16171e;border-radius: 10px }::-webkit-scrollbar-thumb {background: linear-gradient(180deg, #2d2f3c 0%, #3d3f5c 100%);border-radius: 10px;border: 2px solid #16171e }::-webkit-scrollbar-thumb:hover {background: linear-gradient(180deg, var(--client-color) 0%, color-mix(in srgb, var(--client-color) 70%, #000) 100%) }::-webkit-scrollbar-corner {background: #16171e } .packet-array-list {position: fixed;top: 10px;right: 5px;display: flex;flex-direction: column;align-items: flex-end;z-index: 9998;background: transparent;pointer-events: none;user-select: none;}.packet-array-list:active {cursor: grabbing;}.array-item {font-family: 'Nunito', sans-serif;font-weight: 700;font-size: 15px;padding: 3px 10px;margin-bottom: 1px;white-space: nowrap;text-transform: lowercase;display: flex;align-items: center;background: rgba(0, 0, 0, 0.55);color: #fff;border-right: 3px solid var(--client-color);text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);animation: array-slide-in 0.3s ease-out;}.array-item::after {content: '';position: absolute;top: 0;bottom: 0;width: 3px;background: var(--client-color);box-shadow: 0 0 8px var(--client-color);}.packet-array-list.align-right {align-items: flex-end;}.packet-array-list.align-right .array-item::after {right: 0;}.packet-array-list.align-left {align-items: flex-start;}.packet-array-list.align-left .array-item::after {left: 0;} .packet-wm-container {position: fixed;left: 20px;top: 20px;z-index: 9999;pointer-events: none;user-select: none;display: flex;align-items: flex-start;font-family: 'Nunito', sans-serif;}.packet-wm-text {font-size: 30px;font-weight: 900;text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);animation: packet-glow 3s infinite alternate ease-in-out;}.packet-wm-version {font-size: 18px;font-weight: 700;color: #888;margin-left: 4px;margin-top: -2px;text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);}@keyframes packet-glow {0% {color: #ffffff;text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 2px 2px 10px rgba(0, 0, 0, 0.5);}100% {color: var(--client-color);text-shadow: 0 0 15px var(--client-color), 2px 2px 10px rgba(0, 0, 0, 0.5);}}.packet-notifications {position: fixed;bottom: 20px;left: 20px;z-index: 1000000;display: flex;flex-direction: column;gap: 12px;pointer-events: none;}.packet-notification-v2 {background: rgba(10, 10, 15, 0.3) !important;backdrop-filter: blur(10px) !important;-webkit-backdrop-filter: blur(10px) !important;border-radius: 12px !important;padding: 6px 20px;display: flex;align-items: center;gap: 12px;border: none !important;box-shadow: 0 10px 35px rgba(0, 0, 0, 0.5), 0 4px 15px rgba(0, 0, 0, 0.3) !important;transform: translateX(-30px);opacity: 0;transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);min-width: 240px;}.packet-notification-v2.show {transform: translateX(0);opacity: 1;}.packet-notification-v2.hiding {transform: translateX(-10px) scale(0.95);opacity: 0;}.v2-status-icon {width: 16px;height: 16px;border-radius: 50%;flex-shrink: 0;}.packet-notification-v2.enabled .v2-status-icon {background: #8ecc51;box-shadow: 0 0 8px #8ecc51;}.packet-notification-v2.disabled .v2-status-icon {background: #ff5252;box-shadow: 0 0 8px #ff5252;}.packet-notification-v2.info .v2-status-icon {background: #ffffff;}.v2-content {font-family: 'Nunito', sans-serif;color: #e0e0e0;white-space: nowrap;display: flex;align-items: baseline;}.v2-text {font-weight: 800;color: #fff;font-size: 16px;}.v2-subtext {color: rgba(255, 255, 255, 0.6);margin-left: 8px;font-size: 14px;} .packet-hud-item {position: fixed;z-index: 9999;color: #fff;font-family: 'Nunito', sans-serif;display: flex;align-items: center;user-select: none;transition: background 0.3s, backdrop-filter 0.3s, border 0.3s;}.hud-blurred {background: rgba(25, 26, 34, 0.5);backdrop-filter: blur(10px);border: 1.5px solid rgba(255, 255, 255, 0.1);border-radius: 12px;box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);}.hud-default {background: #191a22;border: 2px solid #2d2f3c;border-radius: var(--menu-border-radius);box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);}.packet-watermark {padding: 10px 18px;font-weight: 800;}.wm-logo {color: var(--client-color);font-size: 18px;text-shadow: 0 0 10px var(--client-color);}.wm-sep {width: 2px;height: 18px;background: linear-gradient(180deg, transparent, var(--client-color), transparent);margin: 0 12px;}.wm-val {opacity: 0.9;font-size: 14px;margin-right: 8px;}.packet-target-hud {min-width: 260px;padding: 12px;flex-direction: column;}.th-header {display: flex;align-items: center;gap: 12px;width: 100%;}.th-avatar {width: 44px;height: 44px;border-radius: 10px;background: #222;border: 2px solid rgba(255,255,255,0.1);}.th-hp-container {width: 100%;margin-top: 10px;}.th-hp-bg {width: 100%;height: 8px;background: rgba(0,0,0,0.3);border-radius: 4px;overflow: hidden;}.th-hp-fill {height: 100%;background: var(--client-color);transition: width 0.4s cubic-bezier(0.1, 0.7, 0.1, 1);}.packet-effects-hud {flex-direction: column;padding: 12px 18px;align-items: flex-start;min-width: 150px;}.eff-header {font-size: 14px;font-weight: 900;color: var(--client-color);text-transform: uppercase;margin-bottom: 8px;border-bottom: 1px solid rgba(255,255,255,0.1);width: 100%;padding-bottom: 4px;}.eff-row {display: flex;width: 100%;justify-content: space-between;gap: 20px;font-size: 13px;margin-bottom: 4px;}.eff-name {color: #fff;font-weight: 700;}.eff-val {color: rgba(255,255,255,0.5);font-weight: 600;}.packet-hud-item.dragging-active {cursor: move;outline: 2px dashed var(--client-color);}.packet-notification {display: flex;align-items: center;gap: 12px;background: #191a22;border: 2px solid #2d2f3c;border-radius: 12px;padding: 12px 16px;min-width: 250px;max-width: 320px;transform: translateX(120%);opacity: 0;transition: all .3s cubic-bezier(.34, 1.56, .64, 1);pointer-events: auto;position: relative;overflow: hidden;box-shadow: 0 5px 20px rgba(0, 0, 0, .3) }.packet-notification.show {transform: translateX(0);opacity: 1 }.packet-notification.hiding {transform: translateX(120%);opacity: 0 }.notification-icon {width: 32px;height: 32px;border-radius: 8px;display: flex;align-items: center;justify-content: center }.notification-icon.enabled {background: rgba(150, 150, 255, .08);color: rgba(150, 150, 255, .75) }.notification-icon.disabled {background: rgba(204, 81, 81, .08);color: rgba(204, 81, 81, .75) }.notification-icon svg {width: 18px;height: 18px }.notification-content {flex: 1;min-width: 0 }.notification-title {font-size: 14px;font-weight: 700;color: #fff;white-space: nowrap;overflow: hidden;text-overflow: ellipsis }.notification-message {font-size: 12px;font-weight: 500;color: #888;margin-top: 2px }.notification-progress {position: absolute;bottom: 0;left: 0;height: 3px;background: rgba(150, 150, 255, .6);animation: notificationProgress 3s linear forwards }.packet-notification.disabled .notification-progress {background: rgba(204, 81, 81, .6) }@keyframes notificationProgress {from {width: 100% }to {width: 0% }}.packet-menu {position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%) scale(.9);z-index: 10000;opacity: 0;pointer-events: none;transition: transform .25s ease, opacity .25s ease }.packet-menu.show {transform: translate(-50%, -50%) scale(1);opacity: 1;pointer-events: all }.packet-menu.hiding {transform: translate(-50%, -50%) scale(.9);opacity: 0;pointer-events: none }.menu-container {display: flex;background: #191a22;border: 2px solid #2d2f3c;border-radius: var(--menu-border-radius);box-shadow: 0 0 15px rgba(0, 0, 0, .5);overflow: hidden;width: 950px;height: 630px }.menu-sidebar {width: 240px;background: #16171e;border-right: 2px solid #2d2f3c;padding: 15px;display: flex;flex-direction: column }.menu-logo {padding: 12px;margin-bottom: 15px;text-align: center;cursor: grab;user-select: none }.menu-logo:active {cursor: grabbing }.logo-text {font-size: 32px;font-weight: 800;color: #fff;letter-spacing: 1px;text-transform: lowercase }.tabs-container {display: flex;flex-direction: column;gap: 5px;flex: 1 }.tab {display: flex;align-items: center;gap: 10px;padding: 8px 11px;color: #666;cursor: pointer;border-radius: 10px;transition: all .2s ease;opacity: 0;transform: translateX(-20px);animation: tabPopIn .3s ease forwards;border: 2px solid transparent }.tab-name {font-size: 14px;font-weight: 600 }@keyframes tabPopIn {to {opacity: 1;transform: translateX(0) }}.tab:hover {color: #fff;background: rgba(255, 255, 255, .05) }.tab.active {background: #1f202a;border-color: #2d2f3c;color: #fff }.tab-icon {width: 18px;height: 18px;opacity: .8 }.tab.active .tab-icon {opacity: 1 }.profile-section {display: flex;align-items: center;gap: 10px;padding: 10px 12px;background: #1f202a;border-radius: 10px;border: 2px solid #2d2f3c;margin-top: 10px;transition: all 0.3s ease;cursor: pointer;}.profile-section:hover {background: rgba(255, 255, 255, .05);border-color: #2d2f3c;transform: translateY(-2px);}.profile-avatar {width: 32px;height: 32px;border-radius: 50%;overflow: hidden;border: 2px solid var(--client-color);transition: all 0.3s ease;}.profile-section:hover .profile-avatar {transform: scale(1.1);}.profile-avatar img {width: 100%;height: 100%;object-fit: cover;}.profile-info {flex: 1;min-width: 0 }.profile-name {font-size: 13px;font-weight: 700;color: #fff }.profile-status {font-size: 10px;font-weight: 600;color: var(--client-color);margin-top: 1px }.menu-content {flex: 1;padding: 15px;overflow-y: auto;display: flex;flex-direction: column }.search-controls {display: flex;align-items: center;gap: 12px;width: 50%;justify-content: flex-end;}.search-wrapper {width: 100% !important;}.menu-close-button {background: #1f202a;border: 2px solid #2d2f3c;border-radius: 8px;color: #888;width: 38px;height: 38px;display: flex;align-items: center;justify-content: center;cursor: pointer;transition: all 0.2s ease;flex-shrink: 0;}.menu-close-button:hover {background: #2a2b36;border-color: #ff5252;color: #ff5252;transform: scale(1.05);}.menu-close-button:active {transform: scale(0.95);}.search-container {display: flex;justify-content: space-between;align-items: center;margin-bottom: 15px;padding-bottom: 15px;border-bottom: 2px solid #2d2f3c;}.menu-header-left {font-size: 18px;font-weight: 800;color: #fff;letter-spacing: 0.5px;user-select: none;}.menu-header-left span {color: var(--client-color);}.search-wrapper {position: relative;width: 40%;}.search-icon {position: absolute;left: 12px;top: 50%;transform: translateY(-50%);width: 16px;height: 16px;color: #666;pointer-events: none;z-index: 2 }.search-input {width: 100%;padding: 8px 12px 8px 38px;background: #1f202a;border: 2px solid #2d2f3c;border-radius: 8px;color: #fff;font-size: 13px;font-weight: 500 }.tab-content {display: none;flex: 1;overflow-y: auto;position: relative;padding-right: 10px }.tab-content.active {display: block }.content-shadow-top, .content-shadow-bottom {position: sticky;left: 0;right: 0;height: 30px;pointer-events: none;opacity: 0;transition: opacity .3s ease;z-index: 10 }.content-shadow-top {top: 0;background: linear-gradient(to bottom, rgba(25, 26, 34, .95) 0%, rgba(25, 26, 34, 0) 100%);margin-bottom: -30px }.content-shadow-bottom {bottom: 0;background: linear-gradient(to top, rgba(25, 26, 34, .95) 0%, rgba(25, 26, 34, 0) 100%);margin-top: -30px }.content-shadow-top.visible, .content-shadow-bottom.visible {opacity: 1 }.modules-grid {display: grid;grid-template-columns: repeat(var(--module-columns, 2), 1fr);gap: 12px;padding-right: 2px }.module-card {background: #1f202a;border: 2px solid #2d2f3c;border-radius: 10px;padding: 15px;opacity: 0;transform: scale(.9);animation: modulePopIn .3s ease forwards;transition: border-color 0.3s ease, transform 0.3s ease;}.module-card .module-header {margin-bottom: 5px }.module-card .module-title {font-size: 16px;font-weight: 700;color: #fff;display: block }.module-card .module-desc {font-size: 12px;color: #888;margin-top: 4px;margin-bottom: 12px;font-weight: 500;line-height: 1.4;display: block }@keyframes modulePopIn {0% {opacity: 0;transform: scale(.9) }100% {opacity: 1;transform: scale(1) }}.module-card:hover {border: 2px solid color-mix(in srgb, var(--client-color) 30%, transparent) }.module-toggle {display: flex;align-items: center;justify-content: space-between }.toggle-label {font-size: 14px;color: #888;font-weight: 600 }.module-toggle-controls {display: flex;align-items: center;gap: 10px }.settings-btn {width: 18px;height: 18px;cursor: pointer;opacity: .6;transition: all .2s ease }.settings-btn:hover {opacity: 1;transform: rotate(30deg) }.toggle-switch {position: relative;appearance: none;width: 40px;height: 22px;background: #2a2b36;border-radius: 11px;cursor: pointer;transition: background .3s ease;border: 2px solid #3d3f5c }.toggle-switch::after {content: '';position: absolute;width: 14px;height: 14px;top: 2px;left: 2px;background: #666;border-radius: 50%;transition: all .3s ease }.toggle-switch:checked {background: var(--client-color);border-color: var(--client-color) }.toggle-switch:checked::after {left: 20px;background: #fff }.toggle-switch.locked {cursor: not-allowed;opacity: .8 }.slider-controls-wrapper {display: flex;align-items: center;gap: 12px;flex-shrink: 0;}.slider-container {display: flex;align-items: center;width: 120px;}.slider-input {-webkit-appearance: none;width: 100%;height: 4px;background: #2a2b36;border-radius: 2px;cursor: pointer;outline: none;}.slider-item-styled {display: flex;justify-content: space-between;align-items: center;padding: 10px 0;gap: 15px;}.slider-input::-webkit-slider-thumb {-webkit-appearance: none;width: 16px;height: 16px;background: #ffffff;border-radius: 50%;cursor: pointer;box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);border: none;margin-top: -3px;}.slider-value-box {background: rgba(31, 32, 42, 0.8);border-radius: 6px;min-width: 50px;height: 28px;display: flex;align-items: center;justify-content: center;padding: 0 8px;border: 2px solid rgba(255, 255, 255, 0.05);}.slider-value {font-size: 13px;font-weight: 600;color: #e3e3e3;font-family: 'Nunito', sans-serif;}.text-input {background: #1f202a;border: 2px solid #2d2f3c;border-radius: 8px;padding: 6px 12px;color: #fff;font-size: 12px;font-weight: 600;width: 120px }.text-input:focus {border-color: color-mix(in srgb, var(--client-color) 30%, transparent) }.bind-input {display: flex;align-items: center;justify-content: center;background: #1f202a;border: 2px solid #2d2f3c;border-radius: 8px;padding: 6px 14px;cursor: pointer;min-width: 60px;user-select: none }.bind-input:hover {border-color: color-mix(in srgb, var(--client-color) 30%, transparent) }.bind-input.listening {border-color: color-mix(in srgb, var(--client-color) 30%, transparent);background: rgba(150, 150, 255, .1) }.bind-input.listening .bind-value {color: var(--client-color) }.bind-value {font-size: 12px;font-weight: 700;color: #fff;text-transform: uppercase }.settings-panel {position: fixed;width: auto;min-width: 320px;max-width: 500px;background: #191a22;border: 2px solid #2d2f3c;border-radius: 12px;box-shadow: 0 0 20px rgba(0, 0, 0, .5);z-index: 100001;transform: scale(.8);opacity: 0;transition: transform .2s cubic-bezier(.34, 1.56, .64, 1), opacity .2s ease;display: flex;flex-direction:column;}.settings-panel.show {transform: scale(1);opacity: 1 }.settings-panel.hiding {transform: scale(.8);opacity: 0 }.settings-panel-header {display: flex;justify-content: space-between;align-items: center;padding: 12px 15px;border-bottom: 2px solid #2d2f3c;cursor: grab;user-select: none }.settings-panel-header:active {cursor: grabbing }.settings-panel-title {font-size: 15px;font-weight: 700;color: #fff }.settings-panel-close {background: #1f202a;border: 2px solid #2d2f3c;border-radius: 6px;color: #666;font-size: 12px;cursor: pointer;padding: 4px 8px }.settings-panel-close:hover {background: #2a2b36;color: #fff }.settings-panel-content {padding: 10px 15px;max-height: 500px;overflow-y: auto }.setting-item {display: flex;justify-content: space-between;align-items: center;padding: 12px 0;border-bottom: 1px solid #2d2f3c;gap: 20px;opacity: 0;transform: scale(.95);animation: settingPopIn .25s ease forwards }@keyframes settingPopIn {to {opacity: 1;transform: scale(1) }}.setting-item:last-child {border-bottom: none }.setting-info {flex: 1;min-width: 0;margin-right: 15px }.setting-name {font-size: 14px;color: #fff;font-weight: 600 }.setting-desc {font-size: 11px;color: #888;margin-top: 2px;font-weight: 500 }.custom-color-trigger {width: 22px;height: 22px;border-radius: 50%;border: 2px solid #2d2f3c;cursor: pointer;transition: transform .2s ease }.custom-color-trigger:hover {transform: scale(1.1);border-color: #fff }.custom-color-picker-popup {position: fixed;background: #1f202a;border: 2px solid #2d2f3c;border-radius: 12px;padding: 12px;z-index: 100005;box-shadow: 0 10px 25px rgba(0, 0, 0, .5);opacity: 0;transform: translateY(10px);transition: opacity .2s ease, transform .2s ease;min-width: 240px;pointer-events: none }.custom-color-picker-popup.show {opacity: 1;transform: translateY(0);pointer-events: all }.picker-header {font-size: 11px;font-weight: 700;color: #888;margin-bottom: 8px;text-transform: uppercase;letter-spacing: .5px }.picker-divider {height: 1px;background: #2d2f3c;margin: 10px 0 }.picker-main-section {display: flex;gap: 12px;margin-bottom: 12px }.color-preview-large {width: 40px;height: auto;border-radius: 8px;border: 2px solid rgba(0, 0, 0, .2) }.rgb-sliders {flex: 1;display: flex;flex-direction: column;gap: 6px }.rgb-row {display: flex;align-items: center;gap: 6px }.rgb-label {font-size: 10px;font-weight: 700;color: #666;width: 8px }.rgb-val {font-size: 10px;font-weight: 600;color: #fff;width: 20px;text-align: right }.rgb-slider {-webkit-appearance: none;flex: 1;height: 4px;border-radius: 2px;cursor: pointer }.rgb-slider::-webkit-slider-thumb {-webkit-appearance: none;width: 12px;height: 12px;border-radius: 50%;background: #fff;cursor: pointer;box-shadow: 0 1px 3px rgba(0, 0, 0, .3) }.palette-grid {display: grid;grid-template-columns: repeat(7, 1fr);gap: 6px }.palette-option {width: 20px;height: 20px;border-radius: 50%;border: 2px solid rgba(0, 0, 0, .2);cursor: pointer;transition: transform .2s }.palette-option:hover {transform: scale(1.15);border-color: #fff }.hex-input-container {display: flex;align-items: center;background: #16171e;border: 2px solid #2d2f3c;border-radius: 8px;padding: 6px 10px }.hex-hash {color: #666;font-weight: 700;margin-right: 4px;font-size: 14px }.custom-hex-input {background: transparent;border: none;color: #fff;font-size: 14px;font-weight: 600;width: 100%;text-transform: uppercase;letter-spacing: 1px }.custom-select-trigger {display: flex;align-items: center;gap: 8px;background: #1f202a;border: 2px solid #2d2f3c;border-radius: 8px;padding: 6px 12px;cursor: pointer;min-width: 80px;user-select: none }.custom-select-trigger:hover {border-color: color-mix(in srgb, var(--client-color) 30%, transparent) }.select-value {font-size: 12px;font-weight: 600;color: #fff;flex: 1 }.select-arrow {font-size: 8px;color: #666 }.custom-dropdown {position: fixed;background: #1f202a;border: 2px solid #2d2f3c;border-radius: 8px;z-index: 999999;overflow: hidden;transform: scale(.95) translateY(-5px);opacity: 0;transition: all .15s ease;box-shadow: 0 5px 20px rgba(0, 0, 0, .3) }.custom-dropdown.show {transform: scale(1) translateY(0);opacity: 1 }.dropdown-option {padding: 10px 15px;font-size: 12px;font-weight: 600;color: #888;cursor: pointer }.dropdown-option:hover {background: #2a2b36;color: #fff }.profile-settings-panel {position: fixed;width: 400px;background: #191a22;border: 2px solid #2d2f3c;border-radius: var(--menu-border-radius);box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);z-index: 100010;opacity: 0;transform: scale(0.95) translateY(10px);transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);}.profile-settings-panel.show {opacity: 1;transform: scale(1) translateY(0);}.profile-avatar-preview {width: 60px;height: 60px;border-radius: 50%;background-size: cover;background-position: center;border: 2px solid var(--client-color);}.profile-bg-preview {width: 100px;height: 60px;border-radius: 8px;background-size: cover;background-position: center;border: 2px solid #2d2f3c;}.profile-upload-btn, .profile-reset-btn {background: #2a2b36;border: 2px solid #2d2f3c;border-radius: 8px;color: #666;padding: 8px;cursor: pointer;font-size: 12px;font-weight: 600;transition: all 0.2s;display: flex;align-items: center;justify-content: center;}.profile-upload-btn:hover {background: #3d3f5c;border-color: var(--client-color);color: #fff;}.profile-reset-btn:hover {background: #3d3f5c;border-color: #ff5252;color: #ff5252;}.main-cover {width: 160px;height: 160px;border-radius: 10px;background-size: cover;background-position: center;border: 2px solid #2d2f3c;box-shadow: 0 8px 16px rgba(0,0,0,0.4);flex-shrink: 0;}.main-details {flex: 1;display: flex;flex-direction: column;justify-content: center;}.main-title {font-size: 20px;font-weight: 800;color: #fff;margin-bottom: 4px;}.main-artist {font-size: 14px;font-weight: 600;color: var(--client-color);margin-bottom: 15px;}.main-controls {display: flex;align-items: center;gap: 15px;}.music-progress-wrapper {margin-bottom: 15px;}.progress-bar {width: 100%;height: 6px;background: #2a2b36;border-radius: 3px;cursor: pointer;position: relative;margin-top: 5px;}.progress-fill {position: absolute;left: 0;top: 0;height: 100%;background: var(--client-color);border-radius: 3px;width: 0%;transition: width 0.1s linear;}.time-display {font-size: 11px;color: #888;text-align: right;font-weight: 600;}.player-btn {width: 40px;height: 40px;border-radius: 50%;background: #2a2b36;border: 2px solid #2d2f3c;color: #fff;cursor: pointer;display: flex;align-items: center;justify-content: center;transition: all 0.2s ease;}.player-btn:hover {background: #3d3f5c;border-color: var(--client-color);transform: scale(1.05);}.main-play-btn {width: 50px;height: 50px;background: var(--client-color);border-color: var(--client-color);color: #fff;}.main-play-btn:hover {background: #fff;color: var(--client-color);}.repeat-btn {font-size: 12px;}.track-list-container {display: flex;flex-direction: column;gap: 8px;margin-top: 10px;padding-bottom: 20px;max-height: 250px;overflow-y: auto;position: relative;}.track-item {display: flex;align-items: center;justify-content: space-between;background: #1f202a;border: 2px solid #2d2f3c;border-radius: 8px;padding: 10px;cursor: pointer;transition: all 0.2s ease;}.track-item:hover {background: #2a2b36;border-color: #3d3f5c;}.track-item.active {background: rgba(150, 150, 255, 0.1);border-color: var(--client-color);}.track-item-left {display: flex;align-items: center;gap: 12px;}.track-item-cover {width: 40px;height: 40px;border-radius: 6px;background-size: cover;background-position: center;position: relative;}.track-item-overlay {position: absolute;inset: 0;background: rgba(0,0,0,0.5);display: flex;align-items: center;justify-content: center;opacity: 0;transition: opacity 0.2s;}.track-item:hover .track-item-overlay, .track-item.active .track-item-overlay {opacity: 1;}.track-item-info {display: flex;flex-direction: column;}.track-item-title {font-size: 14px;font-weight: 700;color: #fff;}.track-item-artist {font-size: 11px;font-weight: 600;color: #888;}.track-item.active .track-item-title {color: var(--client-color);}.playing-gif-icon {width: 16px;height: 16px;background-image: url('https://i.gifer.com/YdBO.gif');background-size: contain;filter: invert(1);}.track-equalizer {display: flex;align-items: flex-end;gap: 2px;height: 16px;}.track-equalizer span {width: 3px;background: var(--client-color);animation: equalize 1s infinite alternate;}.track-equalizer span:nth-child(1) {height: 60%;animation-delay: -0.4s;}.track-equalizer span:nth-child(2) {height: 30%;animation-delay: -0.2s;}.track-equalizer span:nth-child(3) {height: 80%;animation-delay: 0s;}@keyframes equalize {0% {height: 30%;}100% {height: 100%;}}.scroll-to-top-btn {position: absolute;bottom: 20px;right: 20px;width: 40px;height: 40px;background: var(--client-color);border-radius: 50%;display: flex;align-items: center;justify-content: center;color: #fff;cursor: pointer;opacity: 0;pointer-events: none;transition: all 0.3s ease;box-shadow: 0 4px 10px rgba(0,0,0,0.3);z-index: 10;border: none;}.scroll-to-top-btn.show {opacity: 1;pointer-events: all;}.scroll-to-top-btn:hover {transform: translateY(-5px);}.menu-header-custom {display: flex;align-items: center;gap: 12px;padding: 10px 5px;margin-bottom: 20px;cursor: grab;user-select: none;}.menu-header-custom:active {cursor: grabbing;}.header-icon-container {width: 48px;height: 48px;background: #1f202a;border-radius: 12px;display: flex;align-items: center;justify-content: center;box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);flex-shrink: 0;border: 2px solid rgba(255, 255, 255, 0.05);}.header-icon {width: 34px;height: 34px;object-fit: contain;filter: drop-shadow(0 0 5px rgba(150, 150, 255, 0.2));}.header-text-container {display: flex;flex-direction: column;justify-content: center;}.header-main-title {font-size: 20px;font-weight: 700;color: #ffffff;line-height: 1;letter-spacing: 0.3px;font-family: 'Nunito', sans-serif;}.header-sub-title {font-size: 14px;font-weight: 500;color: #666666;margin-top: 4px;line-height: 1;font-family: 'Nunito', sans-serif;}.header-navigation {display: flex;align-items: center;gap: 8px;user-select: none;}.nav-item-holder {background: #1f202a;border: 2px solid #2d2f3c;border-radius: 8px;padding: 0 15px;height: 38px;display: flex;align-items: center;gap: 10px;color: #fff;font-weight: 700;font-size: 14px;transition: all 0.2s ease;}.nav-nav-icon {width: 18px;height: 18px;opacity: 0.9;}.nav-arrow-holder {background: #1f202a;border: 2px solid #2d2f3c;border-radius: 8px;width: 38px;height: 38px;display: flex;align-items: center;justify-content: center;color: #666;transition: all 0.2s ease;}.nav-item-holder:hover, .nav-arrow-holder:hover {}   .packet-wm-v1-blurred {top: 20px !important;left: 20px !important;display: flex !important;align-items: center !important;gap: 12px !important;padding: 8px 14px !important;background: rgba(10, 10, 15, 0.3) !important;backdrop-filter: blur(10px) !important;-webkit-backdrop-filter: blur(10px) !important;border: none !important;border-radius: 12px !important;box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4), 0 4px 10px rgba(0, 0, 0, 0.2) !important;font-family: 'Nunito', sans-serif !important;}.wm-v1-icon {width: 22px;height: 22px;object-fit: contain;filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));}.wm-v1-content {display: flex;align-items: center;gap: 10px;}.wm-v1-title {font-size: 16px;font-weight: 800;color: #fff;letter-spacing: 0.2px;display: flex;align-items: baseline;gap: 4px;}.wm-v1-title small {font-size: 12px;font-weight: 600;color: rgba(255, 255, 255, 0.4);}.wm-v1-sep {width: 1px;height: 14px;background: rgba(255, 255, 255, 0.15);}.wm-v1-admin-group {display: flex;align-items: center;gap: 5px;color: var(--client-color);font-weight: 700;font-size: 13px;text-transform: lowercase;}.wm-v1-admin-group svg {opacity: 0.9;filter: drop-shadow(0 0 3px var(--client-color));} @keyframes hudIn {from {opacity: 0;transform: scale(0.8);}to {opacity: 1;transform: scale(1);}}@keyframes hudOut {from {opacity: 1;transform: scale(1);}to {opacity: 0;transform: scale(0.8);}}.packet-hud-stat {position: fixed;z-index: 10000;cursor: move;user-select: none;animation: hudIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);transition: opacity 0.3s, transform 0.3s;}.packet-hud-stat.hiding {animation: hudOut 0.3s ease forwards;}.stat-jello {font-family: 'Nunito', sans-serif;font-weight: 900;font-size: 16px;text-shadow: 2px 2px 4px rgba(0,0,0,0.5);color: #fff;display: flex;gap: 6px;align-items: center;}.stat-jello .stat-val {color: var(--client-color);}.stat-blurred {display: flex !important;align-items: center !important;gap: 12px !important;padding: 8px 16px !important;background: rgba(10, 10, 15, 0.3) !important;backdrop-filter: blur(10px) !important;-webkit-backdrop-filter: blur(10px) !important;border-radius: 12px !important;box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4) !important;border: none !important;transition: all 0.3s ease;}.stat-icon-wrapper {display: flex;align-items: center;justify-content: center;color: var(--client-color);filter: drop-shadow(0 0 5px var(--client-color));}.stat-name {font-size: 14px;font-weight: 800;color: #ffffff;text-transform: uppercase;letter-spacing: 0.2px;}.stat-sep {width: 1px;height: 14px;background: rgba(255, 255, 255, 0.15);}.stat-val {font-size: 15px;font-weight: 800;color: var(--client-color);text-shadow: 0 0 10px rgba(150, 150, 255, 0.3);min-width: 25px;text-align: left;} .custom-multiselect-trigger {display: flex;align-items: center;gap: 8px;background: #1f202a;border: 2px solid #2d2f3c;border-radius: 8px;padding: 6px 12px;cursor: pointer;min-width: 100px;user-select: none;}.custom-multiselect-trigger:hover {border-color: color-mix(in srgb, var(--client-color) 30%, transparent);}.multiselect-dropdown .dropdown-option {display: flex;align-items: center;gap: 10px;}.multiselect-checkbox {width: 18px;height: 18px;background: transparent !important;border: none !important;position: relative;display: flex;align-items: center;justify-content: center;flex-shrink: 0;}.multiselect-checkbox.checked {background: var(--client-color);border-color: var(--client-color);}.multiselect-checkbox.checked::after {content: '';position: absolute;left: 5px;top: 2px;width: 5px;height: 10px;border: solid var(--client-color);border-width: 0 2.5px 2.5px 0;transform: rotate(45deg);}`;
        const el = document.createElement("style");
        el.textContent = styles;
        document.head.appendChild(el);
    }
}

export default function initMenu() {
    const menu = new PacketMenu();

    const combatTab = menu.createTab("combat", "Combat", "https://i.imgur.com/2yBlYdl.png");
    const movementTab = menu.createTab("movement", "Movement", "https://i.imgur.com/Xbiq8Ia.png");
    const renderTab = menu.createTab("render", "Render", "https://i.imgur.com/uzHqOS6.png");
    const playerTab = menu.createTab("player", "Player", "https://i.imgur.com/WtNrzpN.png");
    const displayTab = menu.createTab("display", "Display", "https://i.imgur.com/Cb585Tp.png");
    const miscTab = menu.createTab("misc", "Miscellaneous", "https://i.imgur.com/u5bwEaq.png");

    miscTab.add("cheat-detector", "Cheat Detector", "Обнаружение читов у других игроков", {
        settings: [
            UI.multiSelect("detect-targets", "Detect", ["Simple Macro", "Fast Heal", "Auto Hats", "Auto Break", "Auto Heal"], "Что именно искать", ["Simple Macro", "Fast Heal", "Auto Hats", "Auto Break", "Auto Heal"]),
            UI.select("notify-method", "Notify", ["Notification", "Console"], "Способ уведомления")
        ]
    });
    playerTab
        .add("auto-upgrade", "Auto Upgrade", "Automatically upgrading to selected items", {
            settings: [UI.select("auto-upgrade-type", "Type", ["Katana Hammer", "Stick Hammer", "Polearm Hammer", "Axe Hammer"], "Upgrading items")]
        })
        // .add("anti-wolf", "Anti Wolf", "Automatically places traps on wolves", {
        //     settings: [
        //         UI.slider("anti-wolf-dist", "Distance", 100, 400, "Trigger distance", 200)
        //     ]
        // })
        .add("auto-mills", "Auto Mills", "Automatically placing windmills")
        // .add("auto-scythe", "Auto Scythe", "Automatically upgrading to Scythe")
        .add("auto-heal", "Auto Heal", "Automatically healing player", {
            settings: [
                UI.select("auto-heal-type", "Mode", ["Safe", "Unsafe"], "Heal safety"),
                // UI.slider("auto-heal-speed", "Speed (ms)", 50, 250, "Interval between heals", 110)
            ]
        })
        .add("auto-respawn", "Auto Respawn", "Respawning after death")
        .add("auto-buy", "Auto Buy", "Automatically buying hats")
        .add("auto-chat", "Auto Chat", "Spam chat automatically", {
            settings: [
                UI.text("auto-chat-text", "Message", "Text to send", "packet client"),
                UI.slider("auto-chat-delay", "Delay (ms)", 2000, 6000, "Interval", 3000)
            ]
        })
        .add("item-macros", "Item Macros", "Keybinds for quick item placement", {
            settings: [
                UI.bind("spike-key", "Spike Key", "Place spikes", "KeyV"),
                UI.bind("trap-boost-key", "Trap/Boost Key", "Place trap or boost", "KeyF"),
                UI.bind("turret-key", "Turret Key", "Place turret", "KeyH"),
                UI.bind("food-key", "Food Key", "Use food", "KeyQ"),
                UI.bind("wall-key", "Wall Key", "Place wall", "KeyU"),
                UI.bind("platform-key", "Platform Key", "Place platform", "KeyJ"),
                UI.bind("windmill-key", "Windmill Key", "Place windmill", "KeyN")
            ]
        })
        // .add("hat-macros", "Hat Macros", "Keybinds for quick hat equipment", {
        //     settings: [
        //         UI.bind("bush-hat-key", "Bush Hat", "", "NONE"),
        //         UI.bind("berserker-gear-key", "Berserker Gear", "", "KeyG"),
        //         UI.bind("jungle-gear-key", "Jungle Gear", "", "NONE"),
        //         UI.bind("crystal-gear-key", "Crystal Gear", "", "NONE"),
        //         UI.bind("spike-gear-key", "Spike Gear", "", "NONE"),
        //         UI.bind("immunity-gear-key", "Immunity Gear", "", "KeyC"),
        //         UI.bind("boost-hat-key", "Boost Hat", "", "KeyM"),
        //         UI.bind("apple-hat-key", "Apple Hat", "", "NONE"),
        //         UI.bind("scuba-gear-key", "Scuba Gear", "", "NONE"),
        //         UI.bind("hood-key", "Hood", "", "KeyL"),
        //         UI.bind("demolist-key", "Demolist", "", "KeyZ"),
        //         UI.bind("winter-hat-key", "Winter Hat", "", "NONE"),
        //         UI.bind("pumpkings-curse-key", "Pumpking's Curse", "", "NONE")
        //     ]
        // })
        // .add("packet-limiter", "Packet Limiter", "Limits packets per second to avoid kick", {
        //     settings: [UI.slider("packet-limit", "Packets/Second", 80, 160, "Max packets", 120)]
        // })
        .add("slow-packets", "Slow Packets", "Delays outgoing packets (Fake Lag)", {
            settings: [UI.slider("slow-packets-delay", "Delay (ms)", 50, 200, "Packet delay", 100)]
        })
        .add("auto-hats", "Auto Hats", "Automatically switches hats based on situation", {
            settings: [
                // UI.toggleSelect("auto-hats-combat-switch", "auto-hats-combat", "Combat Switch", [
                //     "Immunity Gear", "Spike Gear", "Berserker Gear", "Crystal Gear", "Demolist Gear", "Bush", "Winter Hat", "Booster Hat", "Apple Hat", "Jungle Gear", "Scuba Gear", "Hood", "None"
                // ], "Switch hat when enemy is near"),
                UI.slider("auto-hats-range", "Enemy Range", 500, 1000, "Distance to detect enemy", 700),
                // UI.toggleSelect("auto-hats-river-switch", "auto-hats-river", "River Switch", [
                //     "Immunity Gear", "Spike Gear", "Berserker Gear", "Crystal Gear", "Demolist Gear", "Bush", "Winter Hat", "Booster Hat", "Apple Hat", "Jungle Gear", "Scuba Gear", "Hood", "None"
                // ], "Switch hat when in water"),
                // UI.toggleSelect("auto-hats-winter-switch", "auto-hats-winter", "Winter Switch", [
                //     "Immunity Gear", "Spike Gear", "Berserker Gear", "Crystal Gear", "Demolist Gear", "Bush", "Winter Hat", "Booster Hat", "Apple Hat", "Jungle Gear", "Scuba Gear", "Hood", "None"
                // ], "Switch hat in snow biome"),
                // UI.toggleSelect("auto-hats-desert-switch", "auto-hats-desert", "Desert Switch", [
                //     "Immunity Gear", "Spike Gear", "Berserker Gear", "Crystal Gear", "Demolist Gear", "Bush", "Winter Hat", "Booster Hat", "Apple Hat", "Jungle Gear", "Scuba Gear", "Hood", "None"
                // ], "Switch hat in desert biome"),
                // UI.select("auto-hats-default", "Default Hat", [
                //     "Immunity Gear", "Spike Gear", "Berserker Gear", "Crystal Gear", "Demolist Gear", "Bush", "Winter Hat", "Booster Hat", "Apple Hat", "Jungle Gear", "Scuba Gear", "Hood", "None"
                // ], "Hat when idle"),
            ]
        })
        // .add("auto-bed", "Auto Bed", "Placing bed after took it in upgrade bar")
        .add("kill-chat", "Kill Chat", "Sending message on kill player", {
            settings: [UI.text("kill-chat-text", "Message", "Text to send", "gg ez")]
        })
        .add("auto-accept", "Auto Accept", "Automatically accepts clan requests")
        .add("auto-secondary", "Auto Secondary", "Automatically selects secondary weapon if not held");

    movementTab.add("auto-push", "Auto Push", "Pushes enemy to spike", {
        settings: [
            UI.toggle("stop-on-shift", "Stop on Shift", "Stops while shift pressed"),
            UI.toggleColor("auto-push-line", "auto-push-line-color", "Push Line", "Draws line to target", "#303030"),
            UI.slider("auto-push-range", "Push Range", 0, 800, "Distance to start pushing", 800)
        ]
    })
        .add("avoid-objects", "Avoid Objects", "Prevents you from walking into enemy spikes/traps", {
            settings: [
                UI.multiSelect("avoid-targets", "Avoid", ["Spikes", "Traps"], "Select objects to avoid"),
                UI.select("avoid-mode", "Move Mode", ["Full Stop", "Avoid"], "Method of avoidance"),
                UI.slider("avoid-distance", "Distance", 50, 350, "Trigger radius", 135)
            ]
        })
        .add("teammate-follow", "Teammate Follow", "Automatically follows teammates", {
            settings: [
                UI.select("teammate-follow-type", "Mode", ["Nearest", "ID"], "Follow logic"),
                UI.text("teammate-follow-id", "Target ID", "ID to follow (if Mode is ID)", ""),
                UI.slider("teammate-follow-dist", "Stop Distance", 1, 300, "Distance to stop", 1)
            ]
        });

    renderTab
        // .add("blood-particles", "Blood Particles", "Эффект крови при попадании", {
        //     settings: [
        //         UI.color("blood-color", "Цвет", "Цвет частиц", "#ff0000"),
        //         UI.slider("blood-count", "Количество", 5, 50, "Частиц за удар", 10),
        //         UI.slider("blood-size", "Размер", 2, 8, "Размер частиц", 4),
        //         UI.slider("blood-speed", "Скорость", 1, 5, "Разлет", 2)
        //     ]
        // })
        // .add("hood-bypass", "Hood Bypass", "You can see invisible players")
        .add("smooth-zoom", "Smooth Wheel Zoom", "Zooming in/out on mouse wheel")
        // .add("hat-reload-bar", "Hat Reload Bar", "Shows reloading hat delay", {
        //     settings: [
        //         UI.color("hat-reload-bar-color", "Bar Color", "Changing bar color", "#9696FF"),
        //         UI.toggle("hat-reload-bar-smooth", "Smooth Animation", "Enable smooth fill")
        //     ]
        // })
        // .add("smooth-direction", "Smooth Direction", "Smooths out player rotation")
        // .add("shadows", "Shadows", "Rendering cool shadows", {
        //     settings: [
        //         UI.slider("shadows-blur", "Blur", 6, 16, "Shadows blur", 8),
        //         UI.color("shadows-color", "Color", "A just shadows color", "#000"),
        //     ]
        // })
        .add("placement-prediction", "Placement Prediction", "Shows where will you place object", {
            settings: [
                UI.color("prediction-spike-color", "Spike Color", "Color for Spikes", "#63aec4"),
                UI.color("prediction-trap-color", "Trap Color", "Color for Traps", "#f678a7"),
                UI.color("prediction-wall-color", "Wall Color", "Color for Walls", "#808080"),
                UI.color("prediction-windmill-color", "Windmill Color", "Color for Windmills", "#8ecc51"),
                // UI.color("prediction-food-color", "Food Color", "Color for Food", "#ff5252"),
                UI.color("prediction-turret-color", "Turret Color", "Color for Turrets", "#ccbb51"),
                UI.color("prediction-platform-color", "Platform Color", "Color for Platforms", "#ce63c4")
            ]
        })
        .add("weapon-range", "Weapon Range", "Shows attack radius", {
            settings: [
                UI.toggleColor("weapon-range-self", "weapon-range-self-color", "Self Range", "Your attack radius", "#f5cb42"),
                UI.toggleColor("weapon-range-enemy", "weapon-range-enemy-color", "Enemy Range", "Enemies attack radius", "#ff4444"),
                UI.toggleColor("weapon-range-teammate", "weapon-range-teammate-color", "Teammate Range", "Teammates attack radius", "#8ecc51")
            ]
        })
        .add("arrows", "Arrows", "Directional indicators", {
            settings: [
                UI.toggleColor("arrows-enemy", "arrows-enemy-color", "Enemy Arrow", "", "#cc5151"),
                UI.toggleColor("arrows-animal", "arrows-animal-color", "Animal Arrow", "", "#888888"),
                UI.toggleColor("arrows-teammate", "arrows-teammate-color", "Teammate Arrow", "", "#a4cc4f"),
                UI.slider("arrows-size", "Size", 10, 18, "Indicator size", 15),
                UI.select("arrows-style", "Style", ["Triangle", "Chevron", "Large"], "Shape style"),
                UI.toggle("arrows-glow", "Glow", "Enable arrow glow"),
                UI.toggle("arrows-pulse", "Pulse", "Animating arrow brightness"),
            ]
        })
        .add("box-esp", "Box ESP", "Draw box around players", {
            settings: [
                UI.toggleColor("box-esp-enemy", "box-esp-enemy-color", "Enemy ESP", "For enemies", "#cc5151"),
                UI.toggleColor("box-esp-teammate", "box-esp-teammate-color", "Teammate ESP", "For team", "#a4cc4f"),
                UI.toggleColor("box-esp-animal", "box-esp-animal-color", "Animal ESP", "For animals", "#888888"),
                UI.slider("box-esp-width", "Length X", 50, 150, "Box width", 100),
                UI.slider("box-esp-height", "Length Y", 50, 150, "Box height", 100),
                UI.select("box-esp-style", "Style", ["Default", "Corner"], "Box style"),
                UI.toggleColor("box-esp-outline", "box-esp-outline-color", "Outline", "Draw outline", "#303030")
            ]
        })
        .add("collide-box", "Collide Box", "Render collision circles on objects", {
            settings: [UI.color("collide-box-color", "Color", "Collision circle color", "#ffffff")]
        })
        .add("trails", "Trails", "Movement trails", {
            settings: [
                UI.select("trails-mode", "Mode", ["Line", "Model"], "Trail style"),
                UI.toggleColor("trails-self", "trails-self-color", "Self Trail", "Your trail", "#9696FF"),
                UI.toggleColor("trails-teammate", "trails-teammate-color", "Teammate Trail", "Team trail", "#a4cc4f"),
                UI.toggleColor("trails-enemy", "trails-enemy-color", "Enemy Trail", "Enemy trail", "#cc5151"),
                UI.slider("trails-history-length", "Length", 5, 50, "History size", 20),
                UI.slider("trails-width", "Width", 1, 10, "Line width", 4)
            ]
        })
        .add("tracers", "Tracers", "Drawing lines to entity", {
            settings: [
                UI.toggleColor("enemy-tracers", "enemy-tracers-color", "Enemy Tracers", "To enemies", "#cc5151"),
                UI.toggleColor("animal-tracers", "animal-tracers-color", "Animal Tracers", "To animals", "#888888"),
                UI.toggleColor("teammate-tracers", "teammate-tracers-color", "Teammate Tracers", "To teammates", "#a4cc4f"),
                UI.slider("tracers-width", "Width", 1, 5, "Line width", 2),
                UI.select("tracers-style", "Style", ["Default", "Dash"], "Visual style")
            ]
        })
        .add("markers", "Item Markers", "Drawing markers on objects", {
            settings: [
                UI.toggleColor("enemy-markers", "enemy-markers-color", "Enemy Markers", "Rendering circle on enemies objects", "#cc5151"),
                UI.toggleColor("teammate-markers", "teammate-markers-color", "Teammate Markers", "Rendering circle on teammates objects", "#51ccb3"),
                UI.toggleColor("self-markers", "self-markers-color", "Self Markers", "Rendering cricle on my objects", "#a4cc4f"),
                UI.toggleColor("markers-outline", "markers-outline-color", "Outline", "Draw outline", "#303030"),
                UI.toggle("markers-owner-id", "Owner ID", "Show player ID below marker")
            ]
        })
        // .add("colored-health-bar", "Colored Health Bar", "Custom colors for health bars", {
        //     settings: [
        //         UI.color("selfteam-health-bar-color", "Self/Team Color", "Color for self and teammates", "#9696FF"),
        //         UI.color("enemyanimal-health-bar-color", "Enemy/Animal Color", "Color for enemies and animals", "#cc5151")
        //     ]
        // })
        // .add("healing-effect", "Healing Effect", "Cookie animation when healing", {
        //     settings: [
        //         UI.slider("cookie-size", "Cookie Size", 40, 80, "Size in pixels", 60),
        //         UI.slider("cookie-count", "Cookie Count", 1, 6, "Number of cookies", 3),
        //         UI.select("cookie-mode", "Animation Mode", ["circle", "spiral", "random", "orbit"], "Movement style"),
        //         UI.slider("cookie-speed", "Speed", 1, 3, "Movement speed", 1),
        //         UI.slider("cookie-lifetime", "Lifetime", 1, 5, "Duration (seconds)", 3)
        //     ]
        // })
        .add("building-health", "Building Health", "Shows health bar for buildings", {
            settings: [
                UI.select("building-health-mode", "Mode", ["Rectangle", "Circle", "Text"], "Display style"),
                UI.toggle("building-health-smooth", "Smooth Animation", "Enable smooth transitions")
            ]
        });
    // .add("angle-searcher", "Angle Searcher", "Поиск и визуализация доступных углов для постройки");;

    combatTab
        .add("auto-retrap", "Auto Retrap", "Automatically replaces broken traps under enemies")
        .add("auto-break", "Auto Break", "Automatically breaking objects", {
            settings: [
                UI.multiSelect("auto-break-targets", "Break Targets", ["Spike", "Trap"], "Choose what to break", ["Trap", "Spike"]),
                // UI.select("auto-break-priority", "Priority", ["Trap", "Spike"], "Which one to break first"),
                // UI.toggle("auto-break-equip-hat", "Equip Hat", "Equip selected hat when breaking"),
                // UI.select("auto-break-hat", "Hat", ["Demolist", "None", "Bush", "Berserker Gear", "Crystal Gear", "Spike Gear", "Immunity Gear", "Booster Hat", "Apple Hat", "Scuba Gear", "Hood", "Winter Hat", "Pumpkings Curse"], "Hat for breaking")
            ]
        })
        .add("auto-replace", "Auto Replace", "Automatically replaces broken objects", {
            settings: [
                // UI.multiSelect("auto-replace-targets", "Targets", ["Trap", "Spike"], "What to replace", ["Trap", "Spike"]),
                UI.slider("auto-replace-dist", "Max Distance", 64, 512, "Distance to broken object", 256)
            ]
        })
        .add("auto-place", "Auto Place", "Smart predictive auto placement", {
            settings: [
                // UI.select("auto-place-priority", "Priority", ["Nearest Enemy Angle", "Any Angle"], "Placement logic"),
                UI.slider("auto-place-distance", "Distance", 64, 512, "Max trigger distance", 256), // Увеличено до 200
            ]
        })
        .add("anti-trap", "Anti Trap", "Placing object around trap", {
            settings: [UI.select("anti-trap-type", "Place Items", ["smart", "traps", "spikes", "walls"], "Items to place")]
        })
        .add("spike-sync", "Spike Sync", "Automatically syncing with naginata and spikes", {
            settings: [
                UI.toggle("spike-sync-visualizer", "Predict Visualizer", "Draws where enemy will land"),
                UI.color("spike-sync-color", "Visualizer Color", "Color of the prediction circle", "#cc5151"),
                // UI.slider("spike-sync-range", "Scan Range", 100, 600, "Tracking distance", 200),
            ]
        })
        .add("pre-place", "Pre Place", "Replaces broken traps instantly", {
            settings: [
                UI.toggle("pre-place-visual", "Visualize", "Show re-trap location"),
                UI.color("pre-place-color", "Color", "Visual color", "#f678a7")
            ]
        });
    // .add("auto-attack", "Auto Attack", "Automatically attacks enemies in range", {
    //     settings: [
    //         UI.select("auto-attack-mode", "Attack Type", ["Invisible", "Default"], "Style of attack")
    //     ]
    // });

    displayTab
        .add("notifications", "Notifications", "Just notifications", {
            settings: [
                UI.toggle("client-actions", "Client Actions", "Notify when client performs automated actions")
            ]
        })
        .add("client-style", "Client Style", "Styles client", {
            active: true, locked: true,
            settings: [
                UI.color("client-color", "Client Color", "Changing client color", "#9696FF"),
                UI.select("menu-language", "Language", ["en", "ru", "ua"], "Menu language"),
                UI.select("modules-sort", "Modules Sort", ["None", "A-Z"], "Sort modules in tabs"),
                UI.select("module-columns", "Module Columns", [1, 2], "Number of columns in menu"),
                UI.slider("border-radius", "Border Radius", 0, 16, "Corner roundness", 12),
                UI.toggle("hide-settings-on-close", "Hide Settings on Close", "Hide settings panels when menu is closed"),
            ]
        })
        .add("discord-rpc", "Discord RPC", "Показывает активность в Discord (Нужен токен)", {
            settings: [
                UI.text("discord-token", "Account Token", "Вставьте ваш Discord токен", "", 100),
                UI.toggle("discord-rpc-time", "Show Time", "Показывать время в игре", true)
            ]
        })
        .add("watermark", "Watermark", "Shows client watermark on screen", {
            settings: [
                UI.select("watermark-style", "Style", ["Jello", "Blurred"], "Choose watermark look")
            ]
        })
        .add("fps-display", "FPS Display", "Show frames per second", {
            settings: [UI.select("fps-style", "Style", ["Jello", "Blurred"], "HUD Style")]
        })
        .add("ping-display", "Ping Display", "Show server latency", {
            settings: [UI.select("ping-style", "Style", ["Jello", "Blurred"], "HUD Style")]
        })
        .add("cps-display", "CPS Display", "Show clicks per second", {
            settings: [UI.select("cps-style", "Style", ["Jello", "Blurred"], "HUD Style")]
        })
        .add("packets-display", "Packets Display", "Show outgoing packets per second", {
            settings: [UI.select("packets-style", "Style", ["Jello", "Blurred"], "HUD Style")]
        });

    // window.addEventListener("DOMContentLoaded", () => {
    menu.init();
    setTimeout(() => {
        rpc.init();
    }, 2000);
    // });
}



function updateWatermarkHUD() {
    let wm = document.getElementById('packet-wm-display');
    if (window.settings.watermark) {
        const style = window.settings.watermarkStyle;

        if (!wm) {
            wm = document.createElement('div');
            wm.id = 'packet-wm-display';
            document.body.appendChild(wm);
        }

        if (style === "Blurred") {
            wm.className = 'packet-wm-container packet-wm-v1-blurred';
            wm.innerHTML = `
                    <img src="https://i.imgur.com/iocotVS.png" class="wm-v1-icon">
                    <div class="wm-v1-content">
                        <span class="wm-v1-title">packet <small>1.1</small></span>
                        <div class="wm-v1-sep"></div>
                        <div class="wm-v1-admin-group">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                            <span>admin</span>
                        </div>
                    </div>
                `;
        } else {
            wm.className = 'packet-wm-container';
            wm.innerHTML = `
                    <span class="packet-wm-text">packet</span>
                    <span class="packet-wm-version">1.1</span>
                `;
        }
    } else {
        if (wm) wm.remove();
    }
}

setInterval(updateWatermarkHUD, 200);

setInterval(() => {
    console.log(window.settings.autoHeal);
}, 1500)

class DiscordRPC {
    constructor() {
        this.socket = null;
        this.interval = null;
        this.startTime = Date.now();
        this.isConnected = false;
        this.s = null;
    }

    init() {
        if (window.settings.discordRpc && window.settings.discordToken) {
            this.connect();
        }
    }

    connect() {
        if (this.isConnected || !window.settings.discordToken) return;

        this.socket = new WebSocket('wss://gateway.discord.gg/?v=10&encoding=json');

        this.socket.onopen = () => {
            console.log("Packet Client: Discord RPC attempting to connect...");
        };

        this.socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            this.s = data.s;

            switch (data.op) {
                case 10:
                    this.isConnected = true;
                    this.startHeartbeat(data.d.heartbeat_interval);
                    this.identify();
                    break;
                case 1:
                    this.sendHeartbeat();
                    break;
                case 11:

                    break;
            }
        };

        this.socket.onclose = (e) => {
            this.isConnected = false;
            this.stopHeartbeat();
            if (e.code !== 4004 && window.settings.discordRpc) {
                console.warn("Packet Client: RPC Disconnected. Retrying in 10s...");
                setTimeout(() => this.connect(), 10000);
            } else if (e.code === 4004) {
                console.error("Packet Client: Invalid Discord Token!");
            }
        };
    }

    identify() {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;

        this.socket.send(JSON.stringify({
            op: 2,
            d: {
                token: window.settings.discordToken,
                capabilities: 125,
                properties: {
                    os: 'Windows',
                    browser: 'Chrome',
                    device: '',
                    system_locale: 'ru-RU',
                    browser_user_agent: navigator.userAgent,
                    browser_version: '120.0.0.0',
                    os_version: '10',
                    referrer: '',
                    referring_domain: '',
                    referrer_current: '',
                    referring_domain_current: '',
                    release_channel: 'stable',
                    client_build_number: 250000,
                    client_event_source: null
                },
                presence: this.getPresenceData(),
                compress: false
            }
        }));
    }

    sendHeartbeat() {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify({ op: 1, d: this.s }));
        }
    }

    getPresenceData() {
        const activity = {
            name: "Packet Client",
            type: 0,
            details: "Version: 1.1",
            state: " ",
            assets: {
                large_image: "https://i.imgur.com/iocotVS.png",
                image: "https://i.imgur.com/iocotVS.png",
                large_text: "Packet Client v1.1"
            }
        };

        if (window.settings.discordRpcTime) {
            activity.timestamps = { start: this.startTime };
        }

        return {
            activities: [activity],
            status: "online",
            since: 0,
            afk: false
        };
    }

    startHeartbeat(ms) {
        if (this.interval) clearInterval(this.interval);
        this.interval = setInterval(() => this.sendHeartbeat(), ms - 2000);
    }

    stopHeartbeat() {
        if (this.interval) clearInterval(this.interval);
    }

    disconnect() {
        this.stopHeartbeat();
        if (this.socket) this.socket.close();
        this.isConnected = false;
    }
}
const rpc = new DiscordRPC();
