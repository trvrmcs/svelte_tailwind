<script lang="ts">
    import TabWrapper from "./TabWrapper.svelte";
    import TabHead from "./TabHead.svelte";
    import TabHeadItem from "./TabHeadItem.svelte";
    import TabContentItem from "./TabContentItem.svelte";
    import FormGrid from "./FormGrid.svelte";
    import LoginForm from "./LoginForm.svelte";
    import CustomColorDemo from "./CustomColorDemo.svelte";

    import ColorSpaceDemo from "./LCH.svelte";
</script>

<TabWrapper active_tab={1}>
    <TabHead>
        <TabHeadItem id={1}>Login Form</TabHeadItem>
        <TabHeadItem id={2}>Colors</TabHeadItem>
        <TabHeadItem id={3}>More Colors</TabHeadItem>
        <TabHeadItem id={4}>Form Grid</TabHeadItem>
    </TabHead>
    <TabContentItem id={1}>
        <LoginForm />
    </TabContentItem>
    <TabContentItem id={2}>
        <CustomColorDemo />
    </TabContentItem>
    <TabContentItem id={3}>
        <ColorSpaceDemo />
    </TabContentItem>
    <TabContentItem id={4}>
        <FormGrid />
    </TabContentItem>
</TabWrapper>
