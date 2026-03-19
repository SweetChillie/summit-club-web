const weeklyThemes = [
  {
    day: 'Monday',
    title: 'Mogodo Monday',
    time: '11:00 till late',
    note: 'Authentic kasi food culture, social vibe, daytime energy transitioning into nightlife.',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    day: 'Tuesday',
    title: 'Teaser Tuesday',
    time: '11:00 till late',
    note: 'Seductive stage performances, VIP seating around a central stage, intimate energy.',
    image: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    day: 'Wednesday',
    title: 'Wild Wednesday',
    time: '11:00 till late',
    note: 'High-energy performances, dramatic lighting, immersive party atmosphere.',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    day: 'Thursday',
    title: 'Thirsty Thursday',
    time: '11:00 till late',
    note: 'Drinks-focused experience, party interactions, playful energy around the stage.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    day: 'Friday',
    title: 'FOMO Friday',
    time: '11:00 till 04:00',
    note: 'Packed venue, group performances, crowd energy and social hype moments.',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    day: 'Saturday',
    title: 'Billionaire Night',
    time: '11:00 till 04:00',
    note: 'Luxury lifestyle, VIP seating, premium bottles and elite nightlife experience.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    day: 'Sunday',
    title: 'Sensual Sunday',
    time: '11:00 till late',
    note: 'Smooth performances, group showcases, relaxed premium close to the week.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
  },
];

const features = [
  { title: 'VIP Booking', text: 'Reserve tables, celebration packages and premium seating directly from the app.' },
  { title: 'Gallery Control', text: 'Update visuals regularly so the brand always feels alive, current and aspirational.' },
  { title: 'Member Specials', text: 'Unlock loyalty rewards, priority entry, private offers and recurring revenue.' },
  { title: 'Miss Summit', text: 'Build hype, reveal contestants, drive voting and push finale table sales.' },
];

const memberships = [
  { name: 'Silver', price: 'R499/mo', perks: 'Priority alerts, selected specials, faster reservations' },
  { name: 'Gold', price: 'R999/mo', perks: 'VIP queue, reserved seating options, premium event access' },
  { name: 'Black', price: 'R1,999/mo', perks: 'Elite booking desk, private offers, concierge-level treatment' },
];

const contestants = [
  { name: 'Candidate 01', votes: '1,284 votes' },
  { name: 'Candidate 02', votes: '1,109 votes' },
  { name: 'Candidate 03', votes: '972 votes' },
];

let activeTheme = weeklyThemes[0];
let galleryItems = [
  { title: 'VIP Lounge', image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Bottle Service', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Night Atmosphere', image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Luxury Mood', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80' },
];
let galleryIndex = 0;

function render() {
  const currentGalleryItem = galleryItems[galleryIndex] || galleryItems[0];
  const app = document.getElementById('app');

  app.innerHTML = `
    <div class="min-h-screen bg-neutral-950 text-white">
      <div class="mx-auto max-w-7xl px-4 py-6 md:px-8">
        <header class="mb-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-amber-950/40 shadow-2xl">
          <div class="grid gap-6 p-6 md:grid-cols-[1.2fr,0.8fr] md:p-8">
            <div>
              <div class="mb-4 flex items-center gap-3">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/30 bg-amber-300/10 text-amber-300 text-xl">♛</div>
                <div>
                  <p class="text-sm uppercase tracking-[0.35em] text-amber-300/80">Summit Club • Hillbrow</p>
                  <h1 class="text-4xl font-semibold tracking-tight md:text-6xl">Luxury nightlife, visuals and bookings — in one app.</h1>
                </div>
              </div>

              <p class="max-w-2xl text-base text-white/70 md:text-lg">
                A more visual Summit Club webapp concept built around weekly themes, a live-updatable gallery, VIP bookings, member offers and Miss Summit campaign rollouts.
              </p>

              <div class="mt-5 grid gap-3 sm:grid-cols-3">
                <div class="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">📍 110 Claim Street, Hillbrow</div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">📞 011 642 7541</div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">🕒 Open daily • 11:00am till 4:00am</div>
              </div>

              <div class="mt-5 flex flex-wrap gap-3">
                <button class="rounded-2xl bg-amber-400 px-4 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/20">Book VIP Table</button>
                <button class="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium">Join Members Club</button>
                <button class="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium">View Miss Summit</button>
              </div>
            </div>

            <div class="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p class="mb-3 text-xs uppercase tracking-[0.3em] text-pink-200">Digital Host</p>
              <div class="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                  alt="Miss Summit avatar"
                  class="h-32 w-28 rounded-3xl object-cover"
                />
                <div>
                  <h2 class="text-2xl font-semibold">Miss Summit</h2>
                  <p class="mt-2 text-sm leading-6 text-white/70">
                    Your visual guide for the platform — less text, more feeling, more brand personality.
                  </p>
                  <button class="mt-4 inline-flex items-center gap-2 rounded-2xl bg-pink-400 px-4 py-3 text-sm font-semibold text-black">
                    ▶ Start Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section class="mb-6 grid gap-4 md:grid-cols-4">
          ${features.map((feature) => `
            <div class="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
              <h2 class="text-lg font-semibold text-amber-300">${feature.title}</h2>
              <p class="mt-2 text-sm leading-6 text-white/70">${feature.text}</p>
            </div>
          `).join('')}
        </section>

        <section class="mb-6 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl">
          <div class="mb-4 flex items-center justify-between">
            <div>
              <p class="text-sm uppercase tracking-[0.3em] text-white/50">Weekly Rollout</p>
              <h3 class="text-2xl font-semibold">Monday–Sunday event schedule</h3>
            </div>
            <span class="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-200">Live programming</span>
          </div>

          <div class="mb-5 flex flex-wrap gap-2">
            ${weeklyThemes.map((event) => `
              <button
                data-action="select-theme"
                data-day="${event.day}"
                class="rounded-full px-4 py-2 text-sm ${activeTheme.day === event.day ? 'bg-amber-400 font-semibold text-black' : 'border border-white/10 bg-white/5 text-white/75'}"
              >
                ${event.title}
              </button>
            `).join('')}
          </div>

          <div class="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div class="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/70">
              <img src="${activeTheme.image}" alt="${activeTheme.title}" class="h-[340px] w-full object-cover" />
            </div>
            <div class="rounded-3xl border border-white/10 bg-neutral-900/70 p-5">
              <p class="text-sm uppercase tracking-[0.28em] text-white/45">${activeTheme.day}</p>
              <h4 class="mt-1 text-3xl font-semibold">${activeTheme.title}</h4>
              <div class="mt-3 inline-flex rounded-2xl bg-white/5 px-3 py-2 text-sm text-amber-200">${activeTheme.time}</div>
              <p class="mt-4 text-sm leading-6 text-white/65">${activeTheme.note}</p>
            </div>
          </div>
        </section>

        <section class="mb-6 grid gap-6 lg:grid-cols-[1fr,1fr]">
          <div class="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 shadow-xl">
            <div class="mb-4 flex items-center justify-between">
              <div>
                <p class="text-sm uppercase tracking-[0.3em] text-white/50">Live Gallery</p>
                <h3 class="mt-1 text-2xl font-semibold">Visuals you can change anytime</h3>
              </div>
              <span class="text-amber-300">🖼</span>
            </div>

            <div class="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/70">
              <img src="${currentGalleryItem.image}" alt="${currentGalleryItem.title}" class="h-[300px] w-full object-cover" />
              <div class="flex items-center justify-between p-4">
                <div>
                  <p class="text-lg font-semibold">${currentGalleryItem.title}</p>
                  <p class="text-sm text-white/60">Tap through and replace with fresh content.</p>
                </div>
                <div class="flex gap-2">
                  <button data-action="prev-gallery" class="rounded-2xl border border-white/10 bg-white/5 p-3">◀</button>
                  <button data-action="next-gallery" class="rounded-2xl border border-white/10 bg-white/5 p-3">▶</button>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl">
            <p class="text-sm uppercase tracking-[0.3em] text-white/50">Gallery Update Panel</p>
            <h3 class="mt-1 text-2xl font-semibold">Add a new gallery image</h3>
            <div class="mt-4 space-y-3">
              <input id="newTitle" placeholder="Image title" class="w-full rounded-2xl border border-white/10 bg-neutral-900/70 px-4 py-3 text-sm outline-none" />
              <input id="newImage" placeholder="Paste image URL" class="w-full rounded-2xl border border-white/10 bg-neutral-900/70 px-4 py-3 text-sm outline-none" />
              <button data-action="add-gallery" class="w-full rounded-2xl bg-amber-400 px-4 py-3 text-sm font-semibold text-black">
                Add to Gallery
              </button>
            </div>
          </div>
        </section>

        <section class="mb-6 grid gap-6 lg:grid-cols-[1fr,1fr]">
          <div class="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl">
            <div class="mb-4 flex items-center justify-between">
              <div>
                <p class="text-sm uppercase tracking-[0.3em] text-white/50">Members Club</p>
                <h3 class="text-2xl font-semibold">Recurring revenue packages</h3>
              </div>
              <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Specials + loyalty</span>
            </div>
            <div class="grid gap-3 md:grid-cols-3">
              ${memberships.map((tier) => `
                <div class="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
                  <p class="text-sm uppercase tracking-[0.22em] text-white/45">${tier.name}</p>
                  <h4 class="mt-2 text-3xl font-semibold text-amber-300">${tier.price}</h4>
                  <p class="mt-3 text-sm leading-6 text-white/65">${tier.perks}</p>
                  <button class="mt-4 w-full rounded-xl border border-amber-300/20 bg-amber-300/10 px-3 py-2 text-sm text-amber-200">Choose ${tier.name}</button>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl">
            <div class="mb-4 flex items-center justify-between">
              <div>
                <p class="text-sm uppercase tracking-[0.3em] text-white/50">Miss Summit</p>
                <h3 class="text-2xl font-semibold">Competition hub</h3>
              </div>
              <span class="rounded-full border border-pink-300/20 bg-pink-300/10 px-3 py-1 text-xs text-pink-200">Voting live</span>
            </div>
            <div class="space-y-3">
              ${contestants.map((c) => `
                <div class="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <h4 class="text-lg font-semibold">${c.name}</h4>
                      <p class="text-sm text-white/55">Weekly spotlight + promo reel + audience push</p>
                    </div>
                    <div class="text-right">
                      <p class="text-xs uppercase tracking-[0.2em] text-white/40">Audience</p>
                      <p class="text-sm font-medium text-pink-200">${c.votes}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="mt-4 grid grid-cols-2 gap-3">
              <button class="rounded-2xl bg-pink-400 px-4 py-3 text-sm font-semibold text-black">Vote Now</button>
              <button class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">Book Finale Table</button>
            </div>
          </div>
        </section>

        <section class="mb-6 rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-green-950/30 p-5 shadow-xl">
          <p class="text-sm uppercase tracking-[0.3em] text-white/50">Casino Experience</p>
          <h3 class="mt-1 text-2xl font-semibold">Slots & Table Games</h3>
          <p class="mt-3 max-w-2xl text-sm text-white/70">
            Expand Summit Club into a full entertainment destination with slot machines, digital games and VIP casino-style experiences integrated into the nightlife environment.
          </p>

          <div class="mt-5 grid gap-3 md:grid-cols-3">
            <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
              <h4 class="text-lg font-semibold">Slot Machines</h4>
              <p class="mt-2 text-sm text-white/60">Quick-play digital slots for continuous engagement.</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
              <h4 class="text-lg font-semibold">VIP Tables</h4>
              <p class="mt-2 text-sm text-white/60">Private high-stakes experiences for premium guests.</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
              <h4 class="text-lg font-semibold">Rewards System</h4>
              <p class="mt-2 text-sm text-white/60">Earn points and redeem within the club ecosystem.</p>
            </div>
          </div>
        </section>

        <section class="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-fuchsia-950/30 p-5 shadow-xl">
            <p class="text-sm uppercase tracking-[0.3em] text-white/50">Private Live Hub</p>
            <h3 class="mt-1 text-2xl font-semibold">Controlled premium digital experience</h3>
            <p class="mt-3 max-w-2xl text-sm leading-6 text-white/70">
              This section demonstrates how Summit can host a managed, members-only live experience under its own platform — creating safer digital monetisation, stronger brand control and additional revenue beyond physical attendance.
            </p>
          </div>

          <div class="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl">
            <p class="text-sm uppercase tracking-[0.3em] text-white/50">Revenue Logic</p>
            <h3 class="mt-1 text-2xl font-semibold">One brand, multiple income streams</h3>
            <div class="mt-4 space-y-3 text-sm text-white/70">
              <div class="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">Walk-ins from social content and weekly theme hype</div>
              <div class="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">VIP reservations and table bookings</div>
              <div class="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">Members-only specials and loyalty plans</div>
              <div class="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">Miss Summit voting, finale tickets and sponsor opportunities</div>
              <div class="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">Controlled digital premium content hub</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;
}

document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-action]');
  if (!target) return;

  const action = target.dataset.action;

  if (action === 'select-theme') {
    const selected = weeklyThemes.find((t) => t.day === target.dataset.day);
    if (selected) {
      activeTheme = selected;
      render();
    }
  }

  if (action === 'prev-gallery') {
    galleryIndex = (galleryIndex - 1 + galleryItems.length) % galleryItems.length;
    render();
  }

  if (action === 'next-gallery') {
    galleryIndex = (galleryIndex + 1) % galleryItems.length;
    render();
  }

  if (action === 'add-gallery') {
    const titleInput = document.getElementById('newTitle');
    const imageInput = document.getElementById('newImage');
    const title = titleInput.value.trim();
    const image = imageInput.value.trim();

    if (!title || !image) return;

    galleryItems = [{ title, image }, ...galleryItems];
    galleryIndex = 0;
    render();
  }
});

render();
