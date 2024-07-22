<template>
  <Card>
    <CardContent>
      <Button variant="outline" size="icon">
        <MenuIcon />
      </Button>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>
import { MenuIcon } from 'lucide-vue-next'
import Card from './ui/card/Card.vue';
import CardContent from './ui/card/CardContent.vue';
import Button from './ui/button/Button.vue';
</script>