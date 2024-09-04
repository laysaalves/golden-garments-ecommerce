<template>
  <RadioGroup
    default-value="option-one"
    class="flex flex-row justify-between items-center mb-2"
  >
    <div class="flex items-center space-x-2">
      <RadioGroupItem
        id="option-one"
        value="option-one"
      />
      <Label for="option-one">P</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem
        id="option-two"
        value="option-two"
      />
      <Label for="option-two">M</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem
        id="option-three"
        value="option-three"
      />
      <Label for="option-three">G</Label>
    </div>
  </RadioGroup>
</template>
