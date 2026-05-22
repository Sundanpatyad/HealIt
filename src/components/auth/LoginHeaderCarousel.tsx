import { useEffect, useRef, useState } from 'react';
import type { ReactElement } from 'react';
import { FlatList, StyleSheet, useWindowDimensions, View } from 'react-native';

import { Onboarding1Illustration } from '../onboarding/illustrations/Onboarding1Illustration';
import { Onboarding2Illustration } from '../onboarding/illustrations/Onboarding2Illustration';
import { spacing } from '../../theme';

const AUTO_ADVANCE_MS = 3500;

/** Source SVG artboard sizes — stage height hugs artwork (no extra vertical pad). */
const ARTBOARD_1 = { w: 390, h: 408 };
const ARTBOARD_2 = { w: 333, h: 360 };

type Slide = {
  id: string;
  render: (viewportWidth: number) => ReactElement;
};

const SLIDES: readonly Slide[] = [
  { id: 'onboarding-1', render: (w) => <Onboarding1Illustration viewportWidth={w} /> },
  { id: 'onboarding-2', render: (w) => <Onboarding2Illustration viewportWidth={w} /> },
];

function illustrationHeight(artboardWidth: number): number {
  const h1 = (artboardWidth / ARTBOARD_1.w) * ARTBOARD_1.h;
  const h2 = (artboardWidth / ARTBOARD_2.w) * ARTBOARD_2.h;
  return Math.ceil(Math.max(h1, h2));
}

/** Auto-advancing header artwork — `onboaring1.svg` & `onboaring2.svg`. */
export function LoginHeaderCarousel() {
  const { width: windowWidth } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<FlatList<Slide>>(null);

  const pageWidth = windowWidth - spacing.screenHorizontal * 2;
  const artboardWidth = Math.min(pageWidth, ARTBOARD_1.w);
  const illustrationViewport = artboardWidth + spacing.screenHorizontal * 2;
  const imageHeight = illustrationHeight(artboardWidth);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    listRef.current?.scrollToIndex({ index: activeIndex, animated: true });
  }, [activeIndex]);

  return (
    <View style={[styles.stage, { height: imageHeight }]}>
      <FlatList
        ref={listRef}
        style={[styles.list, { width: pageWidth, height: imageHeight }]}
        data={[...SLIDES]}
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
          <View style={[styles.page, { width: pageWidth, height: imageHeight }]}>
            {item.render(illustrationViewport)}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  stage: {
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden',
  },
  list: {
    flexGrow: 0,
  },
  page: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
