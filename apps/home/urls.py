from django.conf.urls import patterns, url
from . import views
from django.contrib.staticfiles.storage import staticfiles_storage
from django.views.generic.base import RedirectView

urlpatterns = patterns('',
	url(r'^$', views.index, name='index'),
	url(r'^favicon.ico$', RedirectView.as_view(url=staticfiles_storage.url('/home/favicon.ico'), permanent=False), name="favicon"),
	url(r'^show/(?P<chord_id>\w+)/$', views.show, name='show'),
	url(r'^chords$', views.chords, name='chords'),
	url(r'^review_us$', views.review_us, name='review_us'),
	url(r'^submit_review$', views.SubmitReview.as_view(), name='submit_review'),
	url(r'^reviews$', views.reviews, name='reviews'),
	url(r'^discovery$', views.discovery, name='discovery')
)
