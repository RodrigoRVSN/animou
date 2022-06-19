import { useState, useRef } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions
} from 'react-native';
import { Step } from './components/Step';
import * as S from './styles';
import { steps } from './Onboard.data';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Button } from '../../../componentes/Button';

export const Onboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { width } = useWindowDimensions();

  const handleNextStep = () => {
    const index = currentIndex + 1;
    setCurrentIndex(index);
    flatListRef.current?.scrollToIndex({ index });
  };

  const updateCurrentStep = (ev: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = ev.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index);
  };

  return (
    <S.Container>
      <FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        data={steps}
        renderItem={({ item }) => (
          <Step item={item}>
            <S.BulletContainer>
              {steps.map(({ id }) => (
                <S.Bullet key={id} index={currentIndex} id={id} />
              ))}
            </S.BulletContainer>
          </Step>
        )}
        keyExtractor={(item) => String(item.id)}
        bounces={false}
        onMomentumScrollEnd={updateCurrentStep}
      />

      <S.ButtonContainer>
        <Button label={<AntDesign name="right" />} onPress={handleNextStep} />
      </S.ButtonContainer>
    </S.Container>
  );
};
