<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide" class="text-grey-8">
    <q-card class="q-dialog-plugin">
      <!--
        ...content
        ... use q-card-section for it?
      -->

      <q-card-section>
        <div class="text-h6">Lägg till ny kund</div>
      </q-card-section>

      <q-card-section>
        <q-tabs v-model="tab" no-caps inline-label active-color="primary">
          <q-tab name="general" label="Allmänt">
            <q-badge color="red" floating v-if="generalCount">{{
              generalCount
            }}</q-badge>
          </q-tab>
          <q-tab name="alarms" label="Kontaktuppgifter" />
          <q-tab name="movies" label="Övrigt" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="general">
            <q-input
              v-model="firstname"
              label="Förnamn"
              :rules="[
                (val) => (val && val.length > 0) || 'Skriv personens förnamn',
              ]"
            />
            <q-input
              label="Efternamn"
              v-model="lastname"
              :rules="[
                (val) => (val && val.length > 0) || 'Skriv personens efternamn',
              ]"
            />
            <q-input
              label="Personnummer"
              v-model="personalCodeNumber"
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Skriv personens personnummer',
              ]"
            />
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>

      <!-- buttons example -->
      <q-card-actions align="right">
        <q-btn
          color="primary"
          text
          no-caps
          label="Lägg till"
          @click="onOKClick"
        />
        <q-btn text no-caps label="Stäng" @click="onDialogCancel" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useDialogPluginComponent } from 'quasar';
import { ref, computed } from 'vue';

const props = defineProps({
  // ...your custom props
});

defineEmits([
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emits,
]);

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();
// dialogRef      - Vue ref to be applied to QDialog
// onDialogHide   - Function to be used as handler for @hide on QDialog
// onDialogOK     - Function to call to settle dialog with "ok" outcome
//                    example: onDialogOK() - no payload
//                    example: onDialogOK({ /*...*/ }) - with payload
// onDialogCancel - Function to call to settle dialog with "cancel" outcome

// this is part of our example (so not required)
function onOKClick() {
  // on OK, it is REQUIRED to
  // call onDialogOK (with optional payload)
  onDialogOK();
  // or with payload: onDialogOK({ ... })
  // ...and it will also hide the dialog automatically
}

const tab = ref('general');
const firstname = ref('');
const lastname = ref('');
const personalCodeNumber = ref('');

const generalCount = computed(() => {
  let fields = [firstname, lastname, personalCodeNumber];
  let missing = fields.filter((f) => !f.value || f.value.length == 0);
  return missing.length;
});
</script>
