import { useEffect, useRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import type { OnboardingSlideModel } from '../../constants/onboardingSlides';

type Props = {
  slides: readonly OnboardingSlideModel[];
  activeIndex: number;
  /** Width of each carousel page (illustration zone). */
  pageWidth: number;
  /** Full window width passed into slide artwork sizing. */
  viewportWidth: number;
};

/**
 * Illustration-only pager — advances programmatically; no full-screen swipe.
 */
export function OnboardingIllustrationCarousel({
  slides,
  activeIndex,
  pageWidth,
  viewportWidth,
}: Props) {
  const listRef = useRef<FlatList<OnboardingSlideModel>>(null);

  useEffect(() => {
    listRef.current?.scrollToIndex({ index: activeIndex, animated: true });
  }, [activeIndex]);

  return (
    <FlatList
      ref={listRef}
      style={[styles.list, { width: pageWidth }]}
      data={[...slides]}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      getItemLayout={(_, index) => ({
        length: pageWidth,
        offset: pageWidth * index,
        index,
      })}
      onScrollToIndexFailed={({ index }) =>
        listRef.current?.scrollToOffset({
          offset: pageWidth * Math.max(index, 0),
          animated: true,
        })}
      renderItem={({ item }) => (
        <View style={[styles.page, { width: pageWidth }]}>
          {item.renderIllustration(viewportWidth)}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { flexGrow: 0, alignSelf: 'center' },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
