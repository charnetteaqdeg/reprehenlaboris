const handleTouchMove = (evt) => {
  if (!isDragging) {
    return;
  }

  const touch = evt.touches[0];
  const deltaX = touch.clientX - startClientX;
  const deltaY = touch.clientY - startClientY;

  const newX = startPosition.x + deltaX;
  const newY = startPosition.y + deltaY;

  setPosition({ x: newX, y: newY });
};
