package service

import "sync"

type lst map[string][]string
type Likes struct {
	mu  sync.RWMutex
	Lst lst
}

var UsersLikes Likes = Likes{
	mu:  sync.RWMutex{},
	Lst: map[string][]string{},
}

func (receiver *Likes) AddLike(userID, likeID string) {
	receiver.mu.Lock()
	defer receiver.mu.Unlock()
	receiver.Lst[userID] = append(receiver.Lst[userID], likeID)
}

func (receiver *Likes) GetLikes(userID string) []string {
	receiver.mu.RLock()
	defer receiver.mu.RUnlock()
	return receiver.Lst[userID]
}
