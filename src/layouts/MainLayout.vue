<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-img
          fit="contain"
          src="https://zoezi.se/api/utils/file/download?key=d6ddd852-80cd-4fa0-a582-74ab8965b5ab&size=400"
          style="height: 50px; width: 150px"
          class="q-mr-sm"
        />

        <q-toolbar-title shrink class="text-weight-bold gt-sm"
          >Välkommen, Markus!</q-toolbar-title
        >

        <!-- <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          
          <q-toolbar-title shrink class="text-weight-bold"
            >Zoezi</q-toolbar-title
          > -->
        <!-- <q-icon :name="fabYoutube" color="red" size="28px" /> -->
        <!-- <q-toolbar-title shrink class="text-weight-bold">
            YouTube
          </q-toolbar-title> -->
        <!-- </q-btn> -->

        <q-space />

        <div class="YL__toolbar-input-container row no-wrap">
          <q-select
            :options="[]"
            use-input
            dense
            outlined
            square
            placeholder="Sök kunder, aktiviteter, inställningar mm"
            class="bg-white col"
            @filter="doSearch"
          >
            <template #no-option v-if="searchResult.length">
              <div class="q-pa-md">
                <div v-for="section in searchResult" :key="section.title">
                  <div class="text-weight-bold">{{ section.title }}</div>
                  <q-list>
                    <q-item
                      v-for="item in section.results"
                      :key="item.id"
                      class="q-mb-sm"
                      clickable
                      v-ripple
                    >
                      <q-item-section avatar>
                        <q-avatar>
                          <img :src="item.image" />
                        </q-avatar>
                      </q-item-section>

                      <q-item-section>
                        <q-item-label>{{ item.title }}</q-item-label>
                        <q-item-label caption lines="1">
                          {{ item.subtitle }}</q-item-label
                        >
                      </q-item-section>

                      <q-item-section side>
                        <q-icon name="chat_bubble" color="grey" />
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
            </template>
          </q-select>
          <!--<q-input
            dense
            outlined
            square
            v-model="search"
            placeholder="Sök kunder, aktiviteter, inställningar mm"
            class="bg-white col"
          /> -->
          <q-btn
            class="YL__toolbar-input-btn"
            color="grey-3"
            text-color="grey-8"
            icon="search"
            unelevated
          />
        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <!-- <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="video_call"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Create a video or post</q-tooltip>
          </q-btn> -->
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="apps"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Apps</q-tooltip>
          </q-btn>
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="message"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round color="primary">
            <q-avatar size="36px">
              <img
                src="https://zoezi.se/api/image/get?type=Staff&id=751&size=120"
              />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            v-for="link in links1"
            :key="link.text"
            v-ripple
            clickable
            :to="link.to"
            :exact="link.to == '/'"
            active-class="active-menu-item"
          >
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item
            v-for="link in links2"
            :key="link.text"
            v-ripple
            clickable
            :to="link.to"
            :exact="link.to == '/'"
            active-class="active-menu-item"
          >
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <!-- <q-separator class="q-mt-md q-mb-xs" />

          <q-item-label header class="text-weight-bold text-uppercase">
            More from Youtube
          </q-item-label>

          <q-item v-for="link in links3" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links4" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-mt-md q-mb-lg" />

          <div class="q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons1"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
          <div class="q-py-md q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons2"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div> -->
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { fabYoutube } from '@quasar/extras/fontawesome-v6';

export default {
  name: 'MyLayout',

  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref('');

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    const allData = {
      sections: [
        {
          title: 'Kunder',
          results: [
            {
              id: 17,
              title: 'Markus Johansson',
              subtitle: 'markus@zoezi.se',
              image:
                'https://zoezi.se/api/image/get?type=Staff&id=751&size=120',
            },
          ],
        },
        {
          title: 'Kurser',
          results: [
            {
              id: 17,
              title: 'Yoga',
              subtitle: '22:e december - 14:e mars',
              image:
                'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eW9nQXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            },
          ],
        },
      ],
    };
    const searchResult = ref([]);

    function doSearch(what, done) {
      what = what.toLowerCase();
      let filterSection = function (section) {
        return section.results.filter((x) => {
          console.log('fitlering ' + x.title);
          console.log('res: ' + x.title.toLowerCase().includes(what));
          return x.title.toLowerCase().includes(what);
        });
      };

      let res = [];
      if (what) {
        allData.sections.forEach((section) => {
          let f = filterSection(section);
          console.log('f length ' + f.length);
          if (f.length) {
            let s = Object.assign({}, section);
            s.results = f;
            res.push(s);
          }
        });
      }
      searchResult.value = res;
      done();
    }

    return {
      doSearch,
      searchResult,
      fabYoutube,

      leftDrawerOpen,
      search,

      toggleLeftDrawer,

      links1: [
        { icon: 'home', text: 'Min översikt', to: '/' },
        { icon: 'calendar_month', text: 'Schema', to: '/schedule' },
        { icon: 'phone', text: 'Kunder', to: '/customers' },
      ],
      links2: [
        { icon: 'query_stats', text: 'Statistik', to: '/statistics' },
        { icon: 'message', text: 'Meddelanden', to: '/messages' },
        { icon: 'point_of_sale', text: 'Kassa', to: '/checkout' },
        { icon: 'payments', text: 'Ekonomi', to: '/economy' },
        { icon: 'settings', text: 'Inställningar', to: '/settings' },
      ],
      links3: [
        { icon: fabYoutube, text: 'YouTube Premium' },
        { icon: 'local_movies', text: 'Movies & Shows' },
        { icon: 'videogame_asset', text: 'Gaming' },
        { icon: 'live_tv', text: 'Live' },
      ],
      links4: [
        { icon: 'settings', text: 'Settings' },
        { icon: 'flag', text: 'Report history' },
        { icon: 'help', text: 'Help' },
        { icon: 'feedback', text: 'Send feedback' },
      ],
      buttons1: [
        { text: 'About' },
        { text: 'Press' },
        { text: 'Copyright' },
        { text: 'Contact us' },
        { text: 'Creators' },
        { text: 'Advertise' },
        { text: 'Developers' },
      ],
      buttons2: [
        { text: 'Terms' },
        { text: 'Privacy' },
        { text: 'Policy & Safety' },
        { text: 'Test new features' },
      ],
    };
  },
};
</script>

<style lang="sass">
.YL

  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>

<!-- <template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Välkommen, Markus!
          <q-avatar size="44px" class="absolute-right q-mt-xs q-mr-xs">
            <img
              src="https://zoezi.se/api/image/get?type=Staff&id=751&size=120"
            />
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area
        style="
          height: calc(100% - 80px);
          margin-top: 80px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple to="/" exact>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> Startsida </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/customers">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> Kunder </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/staffs">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Personal </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> Att göra </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> Schema </q-item-section>
          </q-item>
        </q-list>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="drafts" />
          </q-item-section>

          <q-item-section> Bokningar </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="drafts" />
          </q-item-section>

          <q-item-section> Ekonomi </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="drafts" />
          </q-item-section>

          <q-item-section> Inställningar </q-item-section>
        </q-item>
      </q-scroll-area>

      <div
        class="absolute-top q-px-sm"
        style="border-right: 1px solid rgb(221, 221, 221); height: 80px"
      >
        <q-img
          fit="contain"
          src="https://zoezi.se/api/utils/file/download?key=d6ddd852-80cd-4fa0-a582-74ab8965b5ab&size=400"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>
-->
